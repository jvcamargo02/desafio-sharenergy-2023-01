import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, Length } from "class-validator";

export class CreateAuthDto {
    @ApiProperty({
        description: 'Nome do administrador',
        example: 'João da Silva',
    })
    @IsString()
    @IsNotEmpty()
    @Length(3, 20)
    name: string;

    @ApiProperty({
        description: 'Nome de usuário do administrador',
        example: 'joao.silva',
    })
    @IsString()
    @IsNotEmpty()
    @Length(3, 20)
    username: string;

    @ApiProperty({
        description: 'Senha do administrador',
    })
    @IsString()
    @IsNotEmpty()
    @Length(6, 20)
    password: string;
}
