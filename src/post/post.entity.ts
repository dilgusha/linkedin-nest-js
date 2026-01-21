import { CommonEntity } from 'src/common/Common.entity';
import { Column, Entity } from 'typeorm';

@Entity('posts')
export class PostEntity extends CommonEntity {
  @Column()
  title: string;

  @Column()
  content: string;

  @Column()
  image: string;
}
