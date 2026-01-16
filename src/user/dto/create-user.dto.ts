import { IsEmail, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @MinLength(3)
  name: string;

  @IsEmail()
  @MinLength(8)
  email: string;

  @IsString()
  @MinLength(8)
  @MaxLength(20)
  password: string;
}
