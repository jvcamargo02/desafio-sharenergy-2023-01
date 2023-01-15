import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, IsNotEmpty, Length, IsNumberString } from "class-validator";

import { IsCPF } from "../../utils/isValidCpf";

export class CreateClientDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @ApiProperty()
    @IsNumberString()
    @IsNotEmpty()
    @Length(10, 11)
    phone: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    address: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    city: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @Length(2,2)
    state: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @Length(11, 11)
    @IsCPF({ message: 'CPF inválido' })
    cpf: string;
}
