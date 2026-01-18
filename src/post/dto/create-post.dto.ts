import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreatePostDto {
    @IsNumber()
    id: number;

    @IsString()
    title: string;

    @IsString()
    @IsOptional()
    desc?: string
}