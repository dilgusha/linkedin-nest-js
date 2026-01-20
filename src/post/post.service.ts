import { Injectable, NotFoundException } from '@nestjs/common';
import { PostRepository } from './post.repository';
import { CreatePostDto } from './dto/create.post.dto';
import { UpdatePostDto } from './dto/update.post.dto';

@Injectable()
export class PostService {
  constructor(private postRepository: PostRepository) {}

  create(createPostDto: CreatePostDto) {
    return this.postRepository.create(createPostDto);
  }
  update(id: number, updatePostDto: UpdatePostDto) {
    try {
      return this.postRepository.update(id, updatePostDto);
    } catch (error) {
      throw new NotFoundException(error);
    }
  }
}
