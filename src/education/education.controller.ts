import { Body, Controller, Delete, Get, Param, Patch, Post, Req, UseGuards } from "@nestjs/common";
import { EducationService } from "./education.service";
import { CreateEduDto } from "./dto/create-education.dto";
import { AuthGuard } from "src/guards/auth.guard";
import { ApiBearerAuth } from "@nestjs/swagger";
@ApiBearerAuth()
@UseGuards(AuthGuard)
@Controller('education')
export class EducationController {
    constructor(private eduService: EducationService) { }

    @Post('/create')

    async create(@Body() body: CreateEduDto, @Req() req: any) {
        return this.eduService.create(body, req.user.id)
    }


    @Get('/all')
    async findAll() {
        return this.eduService.findAll();
    }

    @Patch('/:id')
    async update(@Body() body: CreateEduDto, @Param('id') id: string, @Req() req: any) {
        return this.eduService.update(parseInt(id), req.user.id, body);
    }

    @Delete('/:id')
    async delete(
        @Param('id') id: number,
        @Req() req: any
    ) {
        return this.eduService.delete(id, req.user.id);
    }


}