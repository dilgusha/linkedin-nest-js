import { Column, Entity } from "typeorm";
import { CommonEntity } from "./common.entity";

@Entity({ name: 'Experience' })
export class Experience extends CommonEntity {
    @Column({ type: 'varchar', length: 100, nullable: true })
    company: string

    @Column({ type: 'varchar', length: 100, nullable: true })
    location: string

    @Column({ type: 'datetime', nullable: true })
    startDate: Date

    @Column({ type: 'datetime', nullable: true })
    endDate: Date

    @Column({ type: 'text', nullable: true })
    description: string
}