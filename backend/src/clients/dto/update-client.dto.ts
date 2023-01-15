import { PartialType } from '@nestjs/swagger';
import { CreateClientDto } from './create-client.dto';
import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNumberString, IsString, Length } from "class-validator";

import { IsCPF } from "../../utils/isValidCpf";

export class UpdateClientDto extends PartialType(CreateClientDto) {
    @ApiProperty()
    @IsString()
    name: string;

    @ApiProperty()
    @IsString()
    @IsEmail()
    email: string;

    @ApiProperty()
    @IsNumberString()
    @Length(10, 11)
    phone: string;

    @ApiProperty()
    @IsString()
    address: string;

    @ApiProperty()
    @IsString()
    city: string;

    @ApiProperty()
    @IsString()
    @Length(2,2)
    state: string;

    @ApiProperty()
    @IsString()
    @Length(11, 11)
    @IsCPF()
    cpf: string;
}
