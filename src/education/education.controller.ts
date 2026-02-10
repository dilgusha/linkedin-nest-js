import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { EduService } from './education.service';
import { CreateEduDto } from './dtos/createEduDto';
import { UpdateEduDto } from './dtos/updateEduDto';


@Controller('education')
export class EducationController {
    constructor(public eduService: EduService) { }

    @Post('/')
    createEdu(@Body() body: CreateEduDto) {
        return this.eduService.create(body)
    }

    @Get('/all')
    getAllEducations() {
        return this.eduService.getEducations()
    }

    @Get('/:id')
    findEducation(@Param('id', ParseIntPipe) id: number) {
        return this.eduService.getEduById(id)
    }

    @Patch('/:id')
    updateEducation(@Param('id', ParseIntPipe) id: number, @Body() body: UpdateEduDto) {
        return this.eduService.updateEdu(id, body)
    }

    @Delete('/:id')
    removeEdu(@Param('id', ParseIntPipe) id: number) {
        return this.eduService.delete(id)
    }
}
