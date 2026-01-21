import { CommonEntity } from 'src/common/Common.entity';
import { GenderEnum, RoleEnum } from 'src/common/enum';
import { Column, Entity } from 'typeorm';

@Entity('users')
export class UserEntity extends CommonEntity {
  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ type: 'varchar', enum: GenderEnum, nullable: true })
  gender: GenderEnum;

  @Column({ type: 'varchar', enum: RoleEnum, default: RoleEnum.USER })
  role: RoleEnum;

  @Column()
  about: string;

  @Column()
  companyName: string;

  @Column()
  birthday: Date;

  @Column({ unique: true })
  phone: string;

  @Column({ default: false })
  isPrivate: boolean;
}
