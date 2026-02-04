import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { EducationEntity } from "./education.entity";

@Injectable()
export class EducationService {
    constructor(
        @InjectRepository(EducationEntity) private eduRepo: Repository<EducationEntity>
    ) { }

    async findAll() {
        return this.eduRepo.find();
    }

    async create(data: Partial<EducationEntity>) {
        const edu = this.eduRepo.create(data);
        return this.eduRepo.save(edu);
    }

    async findOne(id: number) {
        return this.eduRepo.findOneBy({ id });
    }

    // async update(id: number, data: Partial<EducationEntity>) {
    //     const edu = await this.findOne(id);
    //     Object.assign(edu, data);
    //     return this.eduRepo.save(edu);
    // }

    // async delete(id: number) {
    //     const edu = await this.findOne(id);
    //     return this.eduRepo.remove(edu);
    // }

}