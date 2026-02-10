import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Education } from 'src/common/entities/education.entity';
import { Repository } from 'typeorm';
import { EducationType, UpdateEduType } from 'src/common/types/education';

@Injectable()
export class EduService {
    constructor(@InjectRepository(Education) private repo: Repository<Education>) { }

    async create(data: EducationType) {
        const education = this.repo.create(data)
        return await this.repo.save(education)
    }

    async getEducations() {
        const educations = await this.repo.find()
        if (educations.length === 0) throw new NotFoundException('No education exists')
        return educations
    }

    async getEduById(id: number) {
        const education = await this.repo.findOne({ where: { id } })
        if (!education) throw new NotFoundException('Education not found')
        return education
    }

    async updateEdu(id: number, data: UpdateEduType) {
        const education = await this.repo.preload({ id, ...data, updatedAt: new Date() })
        if (!education) throw new NotFoundException('Education not found')
        return await this.repo.save(education)
    }

    async delete(id: number) {
        const education = await this.repo.findOne({ where: { id } })
        if (!education) throw new NotFoundException('Education not found')
        await this.repo.remove(education)
        return { message: 'Education has been removed' }
    }

}
