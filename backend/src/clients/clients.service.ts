import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ObjectId } from 'mongodb';
import { Model } from 'mongoose';

import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { Client, ClientDocument } from './entities/client.entity';

@Injectable()
export class ClientsService {
  constructor(
    @InjectModel(Client.name)
    private clientModel: Model<ClientDocument>,
  ) {}

  async create(createClientDto: CreateClientDto) {
    await this.findByEmail(createClientDto.email, false);
    await this.findByCpf(createClientDto.cpf, false);

    const client = new this.clientModel(createClientDto);

    try {
      await client.save();

      return client;
    } catch (error) {
      throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async findAll() {
    return await this.clientModel.find();
  }

  async findOne(id: string) {
    const client = await this.clientModel.findById(id).exec();

    if (!client) {
      throw new HttpException('Client not found', HttpStatus.NOT_FOUND);
    }

    return client;
  }

  async update(id: string, updateClientDto: UpdateClientDto) {
    await this.findByEmail(updateClientDto.email, false, new ObjectId(id));
    await this.findByCpf(updateClientDto.cpf, false, new ObjectId(id));

    const client: Client = await this.clientModel
      .findByIdAndUpdate(id, updateClientDto)
      .exec();

    if (!client) {
      throw new HttpException('Client not found', HttpStatus.NOT_FOUND);
    }

    return client;
  }

  async remove(id: string) {
    const client: Client = await this.clientModel.findByIdAndDelete(id).exec();

    if (!client) {
      throw new HttpException('Client not found', HttpStatus.NOT_FOUND);
    }

    return client;
  }

  async findByEmail(email: string, mustExist = true, id?: ObjectId) {
    const client = await this.clientModel.findOne({
      email,
    });

    if (id && client?._id && client?._id.equals(id)) {
      return client;
    }

    if (!client && mustExist) {
      throw new HttpException('Invalid email', HttpStatus.NOT_FOUND);
    }

    if (client && !mustExist) {
      throw new HttpException('Client already exists', HttpStatus.CONFLICT);
    }
  }

  async findByCpf(cpf: string, mustExist = true, id?: ObjectId) {
    const client = await this.clientModel.findOne({
      cpf,
    });

    if (id && client?._id && client?._id.equals(id)) {
      return client;
    }

    if (!client && mustExist) {
      throw new HttpException('Invalid cpf', HttpStatus.NOT_FOUND);
    }

    if (client && !mustExist) {
      throw new HttpException('Client already exists', HttpStatus.CONFLICT);
    }
  }
}
