import { readFile, writeFile } from 'fs/promises';
import { CreatePostDto } from './dto/create.post.dto';
import { UpdatePostDto } from './dto/update.post.dto';

export class PostRepository {
  async create(createPostDto: CreatePostDto) {
    const { title, desc } = createPostDto;
    const descs = await readFile('newPost.json', { encoding: 'utf-8' });
    const newPost = JSON.parse(descs);
    const id = Math.floor(Math.random() * 999);
    newPost[id] = { id, title, desc };

    await writeFile('newPost.json', JSON.stringify(newPost));
    return newPost[id];
  }

  async update(id: number, updatePostDto: UpdatePostDto) {
    const descs = await readFile('newPost.json', { encoding: 'utf-8' });
    const updatePost = JSON.parse(descs);

    if (!updatePost[id]) {
      throw new Error('Istifadeciye aid post tapilmadi');
    }

    updatePost[id] = { ...updatePost[id], ...updatePostDto };

    await writeFile('newPost.json', JSON.stringify(updatePost));
    return updatePost[id];
  }
}
