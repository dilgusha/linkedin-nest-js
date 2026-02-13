import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Req, UseGuards, UseInterceptors } from '@nestjs/common';
import { EduService } from './education.service';
import { CreateEduDto } from './dtos/createEduDto';
import { UpdateEduDto } from './dtos/updateEduDto';
import { AuthGuard } from 'src/guards/auth.guard';
import { ApiBearerAuth } from '@nestjs/swagger';
import { CurrentUserInterceptor } from 'src/interceptor/current-user.interceptor';
import { CurrentUser } from 'src/decorators/current-user.decorator';
import { User } from 'src/common/entities/user.entity';

@ApiBearerAuth()
@UseGuards(AuthGuard)
@UseInterceptors(CurrentUserInterceptor)
@Controller('education')
export class EducationController {
    constructor(public eduService: EduService) { }

    @Post('/')
    createEdu(@Body() body: CreateEduDto, @CurrentUser() user: User) {
        return this.eduService.create(body, user.id)
    }

    @Get('/all')
    getAllEducations(@CurrentUser() user: User) {
        return this.eduService.getEducations(user.id)
    }

    @Get('/:id')
    findEducation(@Param('id', ParseIntPipe) id: number, @CurrentUser() user: User) {
        return this.eduService.getEduById(id, user.id)
    }

    @Patch('/:id')
    updateEducation(@Param('id', ParseIntPipe) id: number, @Body() body: UpdateEduDto, @CurrentUser() user: User) {
        return this.eduService.updateEdu(id, body, user.id)
    }

    @Delete('/:id')
    removeEdu(@Param('id', ParseIntPipe) id: number, @CurrentUser() user: User) {
        return this.eduService.delete(id, user.id)
    }
}
