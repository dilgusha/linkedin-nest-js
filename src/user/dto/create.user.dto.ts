import { IsEmail, IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator";

export class CreateUserDto {
    @IsString()
     @IsOptional()
     firstName?: string;
   
     @IsString()
     @IsOptional()
     lastName?: string;
   
     
     @IsString()
     @IsNotEmpty()
     @IsEmail()
     email: string;
   
     @IsString()
     @IsNotEmpty()
     @MinLength(6)
     password: string;

     @IsString()
     role:string
}