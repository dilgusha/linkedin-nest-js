import { ApiProperty } from "@nestjs/swagger";
import { IsDateString, IsEnum, IsOptional, IsString } from "class-validator";
import { EDegree } from "src/common/enam";

export class UpdateEduDto {
    @IsString()
    @IsOptional()
    @ApiProperty()
    schoolName: string

    @IsString()
    @IsOptional()
    @IsEnum(EDegree)
    @ApiProperty()
    degree: EDegree

    @IsString()
    @IsOptional()
    @ApiProperty()
    faculty: string

    @IsDateString()
    @IsOptional()
    @ApiProperty()
    startDate: Date

    @IsDateString()
    @IsOptional()
    @ApiProperty()
    endDate: Date

    @IsString()
    @IsOptional()
    @ApiProperty()
    imageUrl: string
}