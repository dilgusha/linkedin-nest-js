import { ApiProperty } from "@nestjs/swagger";
import {
  IsDate,
  IsDefined,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from "class-validator";

export class CreateExperienceDTO {
    @ApiProperty({example:'company name '})
  @IsDefined()
  @IsString()
  @MaxLength(50)
  @MinLength(3)
  company: string;

  @IsDefined()
  @IsString()
  @MaxLength(50)
  @MinLength(3)
  location: string;

  @IsDefined()
  // @Type(() => Date)
  // @IsDate()
  startDate: Date;

  @IsDefined()
  // @Type(() => Date)
  // @IsDate()
  endDate: Date;

  @IsOptional()
  @IsString()
  @MaxLength(100)
  @MinLength(3)
  description: string;
}