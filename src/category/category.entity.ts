import { CommonEntity } from "src/common/Common.entity";
import { Experience } from "src/experience/experience.entity";
import { Column, Entity, JoinColumn, ManyToMany, ManyToOne } from "typeorm";

@Entity({ name: "categories" })
export class Category extends CommonEntity {
    @Column({ type: "varchar", length: 150, default: null })
    name: string;

    @Column({ type: "text", default: null })
    description: string;

    // @ManyToMany(() => Experience, (experience) => experience.categories)
    // experiences: Experience[];
}