import { Module } from '@nestjs/common';
import { EduService } from './education.service';
import { EducationController } from './education.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Education } from 'src/common/entities/education.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Education])],
  providers: [EduService],
  controllers: [EducationController]
})
export class EducationModule { }
