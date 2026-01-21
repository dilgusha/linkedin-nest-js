import { CommonEntity } from 'src/common/Common.entity';
import { Column, Entity } from 'typeorm';

@Entity()
export class UserEntity extends CommonEntity {
  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;
}
