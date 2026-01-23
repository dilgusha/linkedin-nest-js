import {
  IsString,
  IsEmail,
  IsEnum,
  IsOptional,
  IsBoolean,
  IsDateString,
  IsPhoneNumber,
  MinLength,
  MaxLength,
} from "class-validator";
import { EGenderType, ERoleType } from "src/common/enum";

export class CreateUserDto {
  @IsString()
  @MaxLength(150)
  name: string;

  @IsString()
  @MaxLength(150)
  surname: string;

  @IsOptional()
  @IsEnum(EGenderType)
  gender?: EGenderType;

  @IsEmail()
  email: string;

  @IsString()
  @MinLength(6)
  password: string;

  @IsEnum(ERoleType)
  role: ERoleType;

  @IsOptional()
  @IsString()
  about?: string;

  @IsOptional()
  @IsString()
  @MaxLength(150)
  companyName?: string;

  @IsOptional()
  @IsDateString()
  birthdate?: Date;

  @IsOptional()
  @IsString()
  @MaxLength(13)
  phone?: string;

  @IsOptional()
  @IsBoolean()
  isVisibility?: boolean;
}
 