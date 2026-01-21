import { EGenderType, ERoleType } from "src/common/enum";
import { Column, Entity, Unique } from "typeorm";
import { CommonEntity } from "../common/Common.entity";

@Entity({ name: "users" })
@Unique(["phone"]) 
export class UserEntity extends CommonEntity {
  @Column({ type: "varchar", length: 150, default:null})
  name: string;

  @Column({ type: "varchar", length: 150, default:null })
  surname: string;

  @Column({
    type: "varchar",
    enum: EGenderType,
    default: EGenderType.NULL,
  })
  gender: EGenderType;

  @Column({ type: "varchar", length: 150 })
  email: string;

  @Column({ type: "varchar", length: 150 })
  password: string;

  @Column({
    type: "varchar",
    enum: ERoleType,
    default: ERoleType.USER,
  })
  role: ERoleType;

  @Column({ type: "text", default:null })
  about: string;

  @Column({ type: "varchar", length: 150, default: null })
  companyName: string;

  @Column({ type: "datetime", default:null })
  birthdate: Date;

  @Column({ type: "varchar", length: 13, default: null })
  phone: string;

  @Column({ type: "boolean", default: false })
  isVisibility: boolean;

  @Column({ type: "varchar", default: null })
  passToken: String;

  @Column({ type: "datetime", default: null })
  resetExpiredIn: Date;

}