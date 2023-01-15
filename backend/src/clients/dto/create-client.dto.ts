import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, IsNotEmpty, Length, IsNumberString } from "class-validator";

import { IsCPF } from "../../utils/isValidCpf";

export class CreateClientDto {
    @ApiProperty({
        description: 'Nome do cliente',
        example: 'João da Silva',
    })
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiProperty({
        description: 'E-mail do cliente',
        example: 'email@email.com',
    })
    @IsString()
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @ApiProperty({
        description: 'Telefone do cliente',
        example: '11999999999',
    })
    @IsNumberString()
    @IsNotEmpty()
    @Length(10, 11)
    phone: string;

    @ApiProperty({
        description: 'Endereço do cliente',
        example: 'Rua dos lobos, 0',
    })
    @IsString()
    @IsNotEmpty()
    address: string;

    @ApiProperty({
        description: 'Cidade do cliente',
        example: 'São Paulo',
    })
    @IsString()
    @IsNotEmpty()
    city: string;

    @ApiProperty({
        description: 'Estado do cliente',
        example: 'SP',
    })
    @IsString()
    @IsNotEmpty()
    @Length(2,2)
    state: string;

    @ApiProperty({
        description: 'CPF do cliente',
        example: '51346728305',
    })
    @IsString()
    @IsNotEmpty()
    @Length(11, 11)
    @IsCPF({ message: 'CPF inválido' })
    cpf: string;
}
