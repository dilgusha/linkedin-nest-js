import { Category } from "src/category/category.entity";
import { CommonEntity } from "src/common/Common.entity";
import { UserEntity } from "src/user/User.entity";
import {
    Entity,
    Column,
    ManyToOne,
    JoinColumn,
    OneToMany,
    ManyToMany,
    JoinTable,
} from "typeorm";

@Entity({ name: "experinces" })
export class Experience extends CommonEntity {
    @Column({ type: "varchar", length: 100, default: null })
    company: string;

    @Column({ type: "varchar", length: 100, default: null })
    location: string;

    @Column({ type: "datetime", default: null })
    startDate: Date;

    @Column({ type: "datetime", default: null })
    endDate: Date;

    @Column({ type: "varchar", default: null })
    description: string;

    //   @Column({ type: "int" })
    //   user_id: number;

    //   @ManyToOne(() => UserEntity, (user) => user.experiences)
    //   @JoinColumn({ name: "user_id" })
    //   user: UserEntity[];

    //   @ManyToMany(() => Category, (category) => category.experiences)
    //   @JoinTable({ name: "experiences_categories" })
    //   categories: Category[];
}


export type ExperienceType = {
    company: string;
    location: string;
    startDate: Date;
    endDate: Date;
    description: string;
}