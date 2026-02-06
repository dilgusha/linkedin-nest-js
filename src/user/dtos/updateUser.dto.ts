import { IsEmail, IsOptional, IsString, MinLength } from "class-validator";

export class UpdateUserDto {
    @IsEmail()
    @IsOptional()
    email?: string;

    @IsString()
    @IsOptional()
    @MinLength(6)
    password?: string;

    @IsOptional()
    @IsString()
    name?: string;

    @IsOptional()
    @IsString()
    surname?: string;

    @IsOptional()
    @IsString()
    username?: string;

    @IsOptional()
    @IsString()
    about?: string;

    @IsOptional()
    @IsString()
    companyname?: string;

    @IsOptional()
    @IsString()
    phone?: string;
}