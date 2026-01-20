import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CreatePostDto } from './dto/create.post.dto';
import { PostRepository } from './post.repository';
import { UpdatePostDto } from './dto/update.post.dto';

@Controller('post')
export class PostController {
  constructor(private postRepsitory: PostRepository) {}

  @Post()
  createPost(@Body() createPostDto: CreatePostDto) {
    return this.postRepsitory.create(createPostDto);
  }
  @Patch(':id')
  updatePost(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
    return this.postRepsitory.update(+id, updatePostDto);
  }
}
