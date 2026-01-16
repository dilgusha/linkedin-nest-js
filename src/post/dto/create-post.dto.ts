import { IsString, MaxLength } from 'class-validator';

export class CreatePostDto {
  @IsString()
  title: string;

  @IsString()
  @MaxLength(100)
  description: string;
}
