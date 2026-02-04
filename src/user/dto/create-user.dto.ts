import { ApiProperty } from "@nestjs/swagger";
import { Exclude } from "class-transformer";
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
  @ApiProperty({example:'Dilgusha'})
  @IsString()
  @MaxLength(150)
  name: string;

  @ApiProperty()
  @IsString()
  @MaxLength(150)
  surname: string;

  @ApiProperty({enumName: 'EGenderType', enum: EGenderType})
  @IsOptional()
  @IsEnum(EGenderType)
  gender?: EGenderType;

  @ApiProperty({example:'email@gmail.com'})  
  @IsEmail()
  email: string;

  @ApiProperty({example:'password'})
  @IsString()
  @MinLength(6)
  password: string;


  @ApiProperty()
  @IsOptional()
  @IsString()
  about?: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  @MaxLength(150)
  companyName?: string;

  @ApiProperty()
  @IsOptional()
  @IsDateString()
  birthdate?: Date;

  @ApiProperty()
  @IsOptional()
  @IsString()
  @MaxLength(13)
  phone?: string;

  @ApiProperty()
  @IsOptional()
  @IsBoolean()
  isVisibility?: boolean;
}
 