import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { EducationEntity } from "./education.entity";
import { CreateEduType } from "./dto/create-education.dto";

@Injectable()
export class EducationService {
    constructor(
        @InjectRepository(EducationEntity) private eduRepo: Repository<EducationEntity>
    ) { }

    async findAll() {
        return this.eduRepo.find();
    }

    async create(data: CreateEduType) {
        const edu = this.eduRepo.create(data);
        return this.eduRepo.save(edu);
    }

    async findOne(id: number) {
        return this.eduRepo.findOneBy({ id });
    }

    async update(id: number, data: Partial<EducationEntity>) {
        const edu = await this.findOne(id);
        if (!edu) throw new Error('Education not found')
        Object.assign(edu, data);
        return this.eduRepo.save(edu);
    }

    async delete(id: number) {
        const edu = await this.findOne(id);
        if (!edu) throw new Error('Education not found')
        return this.eduRepo.remove(edu);
    }

}