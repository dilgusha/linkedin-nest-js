import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { EducationService } from "./education.service";
import { CreateEduDto } from "./dto/create-education.dto";

@Controller('education')
export class EducationController {
    constructor(private eduService: EducationService) { }

    @Post('/create')
    async create(@Body() body: CreateEduDto) {
        return this.eduService.create(body)
    }


    @Get('/all')
    async findAll() {
        return this.eduService.findAll();
    }

    @Patch('/:id')
    async update(@Body() body: CreateEduDto, @Param('id') id: string) {
        return this.eduService.update(parseInt(id), body);
    }

    @Delete('/:id')
    async delete(@Param('id') id: string) {
        return this.eduService.delete(parseInt(id));
    }

}