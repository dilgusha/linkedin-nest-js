import { AfterInsert, AfterRemove, AfterUpdate, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { CommonEntity } from "./common.entity";
import { Gender, Role } from "../enam";

@Entity()
export class User extends CommonEntity {
    @Column({ type: "varchar", length: 150, default: null })
    name: string

    @Column({ type: "varchar", length: 150, default: null })
    surname: string

    @Column({ type: "varchar", length: 150 })
    email: string

    @Column({ type: "varchar", length: 150 })
    password: string

    @Column({ type: "varchar", enum: Gender, default: null })
    gender: Gender

    @Column({ type: "varchar", enum: Role, default: null })
    role: Role

    @Column({ type: "text", default: null })
    about: string

    @Column({ type: "varchar", length: 150, default: null })
    companyname: string

    @Column({ type: "datetime", default: null })
    birthday: Date

    @Column({ type: "varchar", length: 13, default: null })
    phone: string

    @Column({ type: "boolean", default: false })
    isVisibility: boolean

    @AfterInsert()
    logInsert() {
        console.log('User inserted')
    }

    @AfterRemove()
    logRemove() {
        console.log('User removed')
    }

    @AfterUpdate()
    logUpdate() {
        console.log('User updated')
    }
}