import { PartialType } from "@nestjs/mapped-types";
import { IsOptional, IsString, MaxLength, MinLength } from "class-validator";

export class CreatePostDto {
    @IsString()
    authorId: string

    @IsString()
    title: string

    @IsString()
    @MinLength(1)
    @MaxLength(3000)
    @IsOptional()
    description?: string

    @IsString()
    @IsOptional()
    image?: string
}

export class UpdatePostDto extends PartialType(CreatePostDto) { }