import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { EducationEntity } from "./education.entity";
import { CreateEduType } from "./dto/create-education.dto";
import { UserService } from "src/user/user.service";

@Injectable()
export class EducationService {
    constructor(
        @InjectRepository(EducationEntity) private eduRepo: Repository<EducationEntity>,
        private userService: UserService
    ) { }

    async findAll() {
        return this.eduRepo.find();
    }

    async create(data: CreateEduType, userId: number) {
        const user = await this.userService.findOne(userId)
        if (!user) {
            throw new NotFoundException("User not found");
        }
        const edu = this.eduRepo.create({
            ...data,
            user
        });
        return this.eduRepo.save(edu);
    }

    async findOne(id: number) {
        return this.eduRepo.findOneBy({ id });
    }

    async update(
        id: number,
        userId: number,
        data: Partial<EducationEntity>
    ) {
        const edu = await this.eduRepo.findOne({
            where: {
                id,
                user: { id: userId },
            },
        });

        if (!edu) {
            throw new NotFoundException("Education not found");
        }

        Object.assign(edu, data);
        return this.eduRepo.save(edu);
    }

    async delete(id: number, userId: number) {
        const edu = await this.eduRepo.findOne({
            where: {
                id,
                user: { id: userId },
            },
        });

        if (!edu) {
            throw new NotFoundException("Education not found");
        }

        return this.eduRepo.remove(edu);
    }


}