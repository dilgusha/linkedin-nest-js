import { ApiProperty } from "@nestjs/swagger";
import { IsDateString, IsEnum, IsOptional, IsString } from "class-validator";
import { EDegree } from "src/common/enam";

export class CreateEduDto {
    @IsString()
    @ApiProperty()
    schoolName: string

    @IsString()
    @IsEnum(EDegree)
    @ApiProperty()
    degree: EDegree

    @IsString()
    @ApiProperty()
    faculty: string

    @IsDateString()
    @ApiProperty()
    startDate: Date

    @IsDateString()
    @ApiProperty()
    endDate: Date

    @IsString()
    @IsOptional()
    @ApiProperty()
    imageUrl: string
}