import { Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { ExperienceService } from "./experience.service";
import { CreateExperienceDTO } from "./dto/create-experience.dto";

@Controller("experiences")
export class ExperienceController {
    constructor(private experienceService: ExperienceService) { }

    @Get()
    async findAll() {
        return this.experienceService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: number) {
        return this.experienceService.findOne(id);
    }

    @Post()
    async create(body: CreateExperienceDTO) {
        return this.experienceService.create(body)
    }

    @Patch(':id')
    async update(@Param('id') id: number, body: Partial<CreateExperienceDTO>) {
        return this.experienceService.update(id, body);
    }

    @Delete(':id/delete')
    async delete(@Param('id') id: number) {
        return this.experienceService.delete(id)
    }

}