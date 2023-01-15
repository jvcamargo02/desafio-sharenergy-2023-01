import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, } from 'class-validator';
import { CreateAuthDto } from './create-auth.dto';

export class LoginAuthDto extends PartialType(CreateAuthDto) {
    @ApiProperty({
        description: 'Nome de usuário do administrador',
        example: 'joao.silva',
    })
    @IsString()
    @IsNotEmpty()
    username: string;

    @ApiProperty({
        description: 'Senha do administrador',
    })
    @IsString()
    @IsNotEmpty()
    password: string;
}
