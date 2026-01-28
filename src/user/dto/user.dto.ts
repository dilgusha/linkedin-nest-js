import { Expose } from "class-transformer"
import { EGenderType, ERoleType } from "src/common/enum";

export class UserDto {
    @Expose({ name: 'id' })
    id: number

    @Expose({ name: 'email' })
    email: string

    @Expose({ name: 'name' })
    name: string;

    @Expose({ name: 'surname' })
    surname: string;

    @Expose({ name: 'role' })
    role:ERoleType

    @Expose({ name: 'gender' })
    gender: EGenderType;

    @Expose({ name: 'about' })
    about: string;

    @Expose({ name: 'companyName' })
    companyName: string;

    @Expose({ name: 'birthdate' })
    birthdate: Date;

    @Expose({ name: 'phone' })
    phone: string;

    @Expose({ name: 'isVisibility' })
    isVisibility: boolean;
}