import { ApiProperty } from "@nestjs/swagger";
import { IsDateString, IsOptional, IsString } from "class-validator";

export class CreateExpDto {
    @ApiProperty()
    @IsString()
    company: string

    @ApiProperty()
    @IsString()
    location: string

    @ApiProperty()
    @IsDateString()
    startDate: Date

    @ApiProperty()
    @IsDateString()
    endDate: Date

    @ApiProperty()
    @IsString()
    @IsOptional()
    description: string
}