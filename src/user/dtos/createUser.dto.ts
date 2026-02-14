import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsEmail, IsEnum, IsOptional, IsString, MinLength } from 'class-validator'
import { Gender } from 'src/common/enam';

export class CreateUserDto {
    @ApiProperty()
    @IsEmail()
    email: string;

    @ApiProperty()
    @IsString()
    @MinLength(6)
    password: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    name?: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    surname?: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    username: string

    @ApiProperty()
    @IsEnum(Gender)
    gender?: Gender;

    @ApiProperty()
    @IsOptional()
    @IsString()
    about?: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    companyname?: string;

    @ApiProperty()
    @IsOptional()
    @IsDateString()
    birthday?: Date

    @ApiProperty()
    @IsOptional()
    @IsString()
    phone?: string;
}

