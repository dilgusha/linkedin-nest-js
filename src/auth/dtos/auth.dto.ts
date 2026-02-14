import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsOptional, IsString, MinLength } from "class-validator";

export class LoginUserDto {
    @ApiProperty()
    @IsOptional()
    @IsEmail()
    email: string

    @ApiProperty()
    @IsOptional()
    @IsString()
    username?: string

    @ApiProperty()
    @IsString()
    @MinLength(8)
    password: string
}