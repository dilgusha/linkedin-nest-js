import { EGenderType, ERoleType } from "src/common/enum";
import { CreateUserDto } from "./dto/create-user.dto";
import { UserEntity } from "./User.entity";

export type CreateUserType = {
    name: string;
    surname: string;
    gender?: EGenderType;
    email: string;
    password: string;
    about?: string;
    companyName?: string;
    birthdate?: Date;
    phone?: string;
    isVisibility?: boolean;
};

// export type CreateUserType = UserEntity
