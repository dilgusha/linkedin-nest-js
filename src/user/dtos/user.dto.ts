import { Expose } from "class-transformer";

export class UserDto {
    @Expose()
    id: number

    @Expose()
    email: string

    @Expose()
    name: string

    @Expose()
    surname: string;

    @Expose()
    username: string

    @Expose()
    gender: string;

    @Expose()
    birthday: Date;

    @Expose()
    phone: string;
}