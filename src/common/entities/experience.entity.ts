import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { CommonEntity } from "./common.entity";
import { User } from "./user.entity";

@Entity({ name: 'Experience' })
export class Experience extends CommonEntity {
    @Column({ type: 'varchar', length: 100, nullable: true })
    company: string

    @Column({ type: 'varchar', length: 100, nullable: true })
    location: string

    @Column({ type: 'datetime', nullable: true })
    startDate: Date

    @Column({ type: 'datetime', nullable: true })
    endDate: Date | null

    @Column({ default: false })
    currentWorking: boolean

    @Column({ type: 'text', nullable: true })
    description: string

    @ManyToOne(() => User, (user) => user.experiences, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'userId' })
    user: User
}
