import { ApiProperty } from "@nestjs/swagger";
import { IsDateString, IsOptional, IsString } from "class-validator";

export class UpdateExpDto {
    @ApiProperty()
    @IsString()
    @IsOptional()
    company: string

    @ApiProperty()
    @IsString()
    @IsOptional()
    location: string

    @ApiProperty()
    @IsDateString()
    @IsOptional()
    startDate: Date

    @ApiProperty()
    @IsDateString()
    @IsOptional()
    endDate: Date

    @ApiProperty()
    @IsString()
    @IsOptional()
    @IsOptional()
    description: string
}