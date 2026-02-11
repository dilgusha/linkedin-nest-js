import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsEnum, IsOptional, IsString } from "class-validator";
import { EDegreeType } from "src/common/enum";

export class CreateEduDto {
    @ApiProperty()
    @IsString()
    schoolName: string;

    @ApiProperty()
    @IsEnum(EDegreeType)
    degree: EDegreeType;

    @ApiProperty()
    @IsString()
    faculty: string;

    @ApiProperty()
    @IsDate()
    startDate: Date;

    @ApiProperty()
    @IsDate()
    endDate: Date;

    @ApiProperty()
    @IsOptional()
    @IsString()
    imageUrl?: string
}


export class CreateEduType{
    schoolName: string;
    degree: EDegreeType;
    faculty: string;
    startDate: Date;
    endDate: Date;
    imageUrl?: string
}
