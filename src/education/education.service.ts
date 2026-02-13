import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Education } from 'src/common/entities/education.entity';
import { Repository } from 'typeorm';
import { EducationType, UpdateEduType } from 'src/common/types/education';
import { UserService } from 'src/user/user.service';

@Injectable()
export class EduService {
    constructor(
        @InjectRepository(Education) private repo: Repository<Education>,
        private userService: UserService
    ) { }

    async create(data: EducationType, id: number) {
        const user = await this.userService.findOne(id)
        const education = this.repo.create({ ...data, user })
        return await this.repo.save(education)
    }

    async getEducations(userId: number) {
        const educations = await this.repo.find({ where: { user: { id: userId } } })
        if (educations.length === 0) throw new NotFoundException('No education exists')
        return educations
    }

    async getEduById(id: number, userId: number) {
        const education = await this.repo.findOne({ where: { id, user: { id: userId } } })
        if (!education) throw new NotFoundException('Education not found')
        return education
    }

    async updateEdu(id: number, data: UpdateEduType, userId: number) {
        const result = await this.repo.update(
            { id, user: { id: userId } },
            { id, ...data, updatedAt: new Date() }
        )
        if (result.affected === 0) throw new NotFoundException('Education not found')
        return await this.repo.findOne({ where: { id, user: { id: userId } } })
    }

    async delete(id: number, userId: number) {
        const education = await this.repo.findOne({ where: { id, user: { id: userId } } })
        if (!education) throw new NotFoundException('Education not found')
        await this.repo.remove(education)
        return { message: 'Education has been removed' }
    }

}
