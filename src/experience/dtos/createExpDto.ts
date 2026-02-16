import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsDateString, IsOptional, IsString, ValidateIf } from "class-validator";

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

    @ApiProperty({ type: String, format: 'date-time', nullable: true, default: null })
    @ValidateIf(d => d.currentWorking === false)
    @IsDateString()
    @IsOptional()
    endDate?: Date | null

    @ApiProperty()
    @IsBoolean()
    currentWorking: boolean

    @ApiProperty()
    @IsString()
    @IsOptional()
    description: string
}