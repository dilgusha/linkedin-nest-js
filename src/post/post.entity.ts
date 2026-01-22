// src/modules/post/post.entity.ts
import { Entity, Column } from 'typeorm';
import { CommonEntity } from 'src/common/common.entity';

@Entity({ name: 'posts' })
export class Post extends CommonEntity {
  @Column({ type: 'varchar', length: 150, default: null })
  title: string;

  @Column({ type: 'varchar', length: 150, default: null })
  description: string;

  @Column({ type: 'varchar', length: 255, default: null })
  image: string;
}
