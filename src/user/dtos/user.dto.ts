import { PartialType } from '@nestjs/mapped-types'
import { IsEmail, IsString, MaxLength, MinLength } from 'class-validator'

export class CreateUserDto {
    @IsString()
    @MinLength(3)
    username: string

    @IsEmail()
    email: string

    @IsString()
    @MinLength(8)
    @MaxLength(20)
    password: string
}

export class UpdateUserDto extends PartialType(CreateUserDto) { }