import { EGenderType, ERoleType } from "src/common/enum";
import { CreateUserDto } from "./dto/create-user.dto";

// export type CreateUserType = {
//     name: string;
//     surname: string;
//     gender?: EGenderType;
//     email: string;
//     password: string;
//     role: ERoleType;
//     about?: string;
//     companyName?: string;
//     birthdate?: Date;
//     phone?: string;
//     isVisibility?: boolean;
// };

export type CreateUserType = CreateUserDto
