import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { EDegree } from "../enam";
import { CommonEntity } from "./common.entity";
import { User } from "./user.entity";

@Entity({ name: 'education' })
export class Education extends CommonEntity {
    @Column({ type: 'varchar', length: 100, nullable: true })
    schoolName: string

    @Column({ type: 'simple-enum', enum: EDegree, default: EDegree.OTHER })
    degree: EDegree

    @Column({ type: 'varchar', length: 100, nullable: true })
    faculty: string

    @Column({ type: 'datetime', nullable: true })
    startDate: Date

    @Column({ type: 'datetime', nullable: true })
    endDate: Date

    @Column({ type: 'text', nullable: true })
    imageUrl: string

    @ManyToOne(() => User, (user) => user.education, {
        onDelete: 'CASCADE'
    })

    @JoinColumn({ name: 'userId' })
    user: User
}