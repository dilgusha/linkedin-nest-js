import { IsEmail, IsOptional, IsString, MaxLength, Min, MinLength } from "class-validator";

export class CreateUserDto{
    @IsString()
    @MinLength(3)
    name: string;

    @IsEmail()
    email: string;

    @IsString()
    @MinLength(8)
    @MaxLength(20)
    password: string;
}