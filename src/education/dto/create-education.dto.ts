import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsDate, IsDateString, IsEnum, IsOptional, IsString } from "class-validator";
import { EDegreeType } from "src/common/enum";

export class CreateEduDto {
    @ApiProperty({example:'company name '})
    // @ApiProperty()
    @IsString()
    schoolName: string;

    @ApiProperty({ enum: EDegreeType })
    @IsEnum(EDegreeType)
    degree: EDegreeType;

    @ApiProperty()
    @IsString()
    faculty: string;

    @Type(() => Date)
    @ApiProperty()
    @IsDate()
    startDate: Date;

    // @Type(() => Date)
    @ApiProperty()
    @IsDateString()
    endDate: Date;

    @ApiProperty()
    @IsOptional()
    @IsString()
    imageUrl?: string
}


export class CreateEduType {
    schoolName: string;
    degree: EDegreeType;
    faculty: string;
    startDate: Date;
    endDate: Date;
    imageUrl?: string
}
