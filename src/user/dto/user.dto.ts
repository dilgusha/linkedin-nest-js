import { Expose } from 'class-transformer';
import { GenderEnum, RoleEnum } from 'src/common/enum';

export class UserDto {
  @Expose({ name: 'id' })
  id: number;

  @Expose({ name: 'email' })
  email: string;

  @Expose({ name: 'name' })
  name: string;

  @Expose({ name: 'surname' })
  surname: string;

  @Expose({ name: 'about' })
  about: string;

  @Expose({ name: 'gender' })
  gender: GenderEnum;

  @Expose({ name: 'role' })
  role: RoleEnum;

  @Expose({ name: 'phone' })
  phone: string;

  @Expose({ name: 'companyName' })
  companyName: string;

  @Expose({ name: 'birthday' })
  birthday: Date;

  @Expose({ name: 'isPrivate' })
  isPrivate: boolean;
}
