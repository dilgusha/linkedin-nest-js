import { IsEmail, IsOptional, IsString, MinLength } from "class-validator";
import { CreateUserDto } from "src/user/dtos/user.dto";

export class RegisterUserDto extends CreateUserDto { }

export class LoginUserDto {
    @IsOptional()
    @IsEmail()
    email?: string

    @IsOptional()
    @IsString()
    username?: string

    @IsString()
    @MinLength(8)
    password: string
}