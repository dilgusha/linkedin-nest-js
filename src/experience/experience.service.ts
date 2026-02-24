import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Experience } from 'src/common/entities/experience.entity';
import { Repository } from 'typeorm';
import { UserService } from 'src/user/user.service';
import { ExperienceType, UpdateExpType } from 'src/common/types/experience';

@Injectable()
export class ExperienceService {
    constructor(
        @InjectRepository(Experience) private repo: Repository<Experience>,
        private userService: UserService
    ) { }

    async create(data: ExperienceType, userId: number) {
        const user = await this.userService.findOne(userId)
        if (!user) throw new NotFoundException('User not found')
        if (data.currentWorking && data.endDate) throw new BadRequestException('If currentWorking is true, endDate must be null')
        if (!data.currentWorking && !data.endDate) throw new BadRequestException('If currentWorking is false, endDate is required')
        const experience = this.repo.create({
            ...data,
            currentWorking: data.endDate === null,
            user
        })
        return this.repo.save(experience)
    }

    async getExperiences(userId: number) {
        const user = await this.userService.findOne(userId)
        if (!user) throw new NotFoundException('User not found')
        const experiences = await this.repo.find({ where: { user: { id: user.id } } })
        if (experiences.length === 0) throw new NotFoundException('No Experience exists')
        return experiences
    }

    async findExperience(id: number, userId: number) {
        const user = await this.userService.findOne(userId)
        if (!user) throw new NotFoundException('User not found')
        const experience = await this.repo.findOne({ where: { id, user: { id: user.id } } })
        if (!experience) throw new NotFoundException('Experience not found')
        return experience
    }

    async update(id: number, userId: number, data: UpdateExpType) {
        const user = await this.userService.findOne(userId)
        if (!user) throw new NotFoundException('User not found')
        const exist = await this.repo.findOne({ where: { id, user: { id: user.id } } })
        if (!exist) throw new NotFoundException('Experience not found')
        const result = await this.repo.update(exist.id, { ...data, updatedAt: new Date() })
        if (!result.affected) throw new NotFoundException('Experience not found')
        return await this.repo.findOne({ where: { id, user: { id: user.id } } })
    }

    async delete(id: number, userId: number) {
        const user = await this.userService.findOne(userId)
        if (!user) throw new NotFoundException('User not found')
        const experience = await this.repo.findOne({ where: { id, user: { id: user.id } } })
        if (!experience) throw new NotFoundException('Experience not found')
        await this.repo.remove(experience)
        return { message: 'The Experience has beed removed' }
    }
}
