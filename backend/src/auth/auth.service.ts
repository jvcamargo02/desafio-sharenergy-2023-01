import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcrypt';
import { InjectModel } from '@nestjs/mongoose';

import { CreateAuthDto } from './dto/create-auth.dto';
import { LoginAuthDto } from './dto/login-auth.dto';
import { User, UserDocument } from './entities/user.entity';


@Injectable()
export class AuthService {

  constructor(
    @InjectModel(User.name)
    private userModel: Model<UserDocument>) {    
  }

  async create(createAuthDto: CreateAuthDto) {
    await this.findUserByUserName(createAuthDto.username, false);
    const hashedPassword = await this.hashPassword(createAuthDto.password);

    const user = new this.userModel({...createAuthDto, password: hashedPassword});

    delete user.password;

    try {
      await user.save();

      delete user.password;

      return await this.generateToken(user);
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async findOne(loginAuthDto: LoginAuthDto) {
    const user = await this.findUserByUserName(loginAuthDto.username);

    await this.checkIfPasswordIsValid(loginAuthDto.password, user.password);

    delete user.password;

    return await this.generateToken(user);
  }

  async findUserByUserName(username: string, mustExist = true) {
    const user = await this.userModel.findOne({ username });

    if (!user && mustExist) {
      throw new HttpException('Invalid username or password', HttpStatus.NOT_FOUND);
    }

    if (user && !mustExist) {
      throw new HttpException('User already exists', HttpStatus.CONFLICT);
    }

    return user;
  }

  async checkIfPasswordIsValid(password: string, hashedPassword: string) {
    const isValid = await bcrypt.compare(password, hashedPassword);

    if (!isValid) {
      throw new HttpException('Invalid username or password', HttpStatus.UNAUTHORIZED);
    }

    return isValid;
  }


  async hashPassword(password: string) {
    const generatedSalt = bcrypt.genSaltSync(10);

    return await bcrypt.hashSync(password, generatedSalt);
  }

  async generateToken(user: User) {
    const secret: string = process.env.JWT_SECRET;
    const payload = {
      id: user._id,
      name: user.name,
      username: user.username
    };

    return {
      access_token: await jwt.sign(payload, secret, { expiresIn: '1d' }),
    };
  }

  async validateToken(token: string) {
    const secret: string = process.env.JWT_SECRET;
    

    try {
      const payload = await jwt.verify(token, secret);
      const user = await this.userModel.findById(payload.id).exec();
  
      if (!user) {
        throw new HttpException('Token is expired or invalid', HttpStatus.UNAUTHORIZED);
      }
  
      return user;
    } catch (error) {
      throw new HttpException('Token is expired or invalid', HttpStatus.UNAUTHORIZED);
    }

  }

}
