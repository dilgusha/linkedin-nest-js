import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UseGuards } from '@nestjs/common';
import { ExperienceService } from './experience.service';
import { CreateExpDto } from './dtos/createExpDto';
import { CurrentUser } from 'src/decorators/current-user.decorator';
import { User } from 'src/common/entities/user.entity';
import { AuthGuard } from 'src/guards/auth.guard';
import { ApiBearerAuth } from '@nestjs/swagger';
import { UpdateExpDto } from './dtos/updateExpDto';

@ApiBearerAuth()
@UseGuards(AuthGuard)
@Controller('experience')
export class ExperienceController {
    constructor(public expService: ExperienceService) { }

    @Post('/')
    createExperience(@Body() body: CreateExpDto, @CurrentUser() user: User) {
        return this.expService.create(body, user.id)
    }

    @Get('/all')
    getAllExperiences(@CurrentUser() user: User) {
        return this.expService.getExperiences(user.id)
    }

    @Get('/:id')
    getExperience(@Param('id', ParseIntPipe) id: number, @CurrentUser() user: User) {
        return this.expService.findExperience(id, user.id)
    }

    @Patch('/:id')
    updateExperience(@Param('id', ParseIntPipe) id: number, @CurrentUser() user: User, @Body() body: UpdateExpDto) {
        return this.expService.update(id, user.id, body)
    }

    @Delete('/:id')
    deleteExpreience(@Param('id', ParseIntPipe) id: number, @CurrentUser() user: User) {
        return this.expService.delete(id, user.id)
    }
}
