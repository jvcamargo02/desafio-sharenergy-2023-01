import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, } from 'class-validator';
import { CreateAuthDto } from './create-auth.dto';

export class LoginAuthDto extends PartialType(CreateAuthDto) {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    username: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    password: string;
}
