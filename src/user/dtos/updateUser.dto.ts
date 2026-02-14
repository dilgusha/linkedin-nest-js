import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsOptional, IsString, MinLength } from "class-validator";

export class UpdateUserDto {
    @ApiProperty()
    @IsEmail()
    @IsOptional()
    email?: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    @MinLength(6)
    password?: string;

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
    username?: string;

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
    @IsString()
    phone?: string;
}