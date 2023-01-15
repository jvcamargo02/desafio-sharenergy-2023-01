import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, Length } from "class-validator";

export class CreateAuthDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @Length(3, 20)
    name: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @Length(3, 20)
    username: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @Length(6, 20)
    password: string;
}
