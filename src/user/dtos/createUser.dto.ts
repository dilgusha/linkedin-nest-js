import { IsDateString, IsEmail, IsEnum, IsOptional, IsString, MinLength } from 'class-validator'
import { Gender } from 'src/common/enam';

export class CreateUserDto {
    @IsEmail()
    email: string;

    @IsString()
    @MinLength(6)
    password: string;

    @IsOptional()
    @IsString()
    name?: string;

    @IsOptional()
    @IsString()
    surname?: string;

    @IsOptional()
    @IsString()
    username: string

    @IsEnum(Gender)
    gender?: Gender;

    @IsOptional()
    @IsString()
    about?: string;

    @IsOptional()
    @IsString()
    companyname?: string;

    @IsOptional()
    @IsDateString()
    birthday?: Date

    @IsOptional()
    @IsString()
    phone?: string;
}

