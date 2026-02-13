import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Experience, ExperienceType } from "./experience.entity";
import { Repository } from "typeorm";

@Injectable()
export class ExperienceService {
    constructor(@InjectRepository(Experience) private expRepo: Repository<Experience>
) { }

    async findAll() {
        return this.expRepo.find();
    }

    async findOne(id: number) {
        return this.expRepo.findOneBy({ id });
    }

    async create(data: ExperienceType) {
        const exp = this.expRepo.create(data);
        return this.expRepo.save(exp);
    }


    async update(id: number, data: Partial<ExperienceType>) {
        const exp = await this.expRepo.findOneBy({ id });
        if (!exp) {
            throw new Error("Experience not found");
        }
        Object.assign(exp, data);
        return this.expRepo.save(exp);
    }

    async delete(id: number) {
        const exp = await this.expRepo.findOneBy({ id });
        if (!exp) {
            throw new Error("Experience not found");
        }
        return this.expRepo.remove(exp);
    }

}