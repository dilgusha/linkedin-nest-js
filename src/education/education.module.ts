import { Module } from '@nestjs/common';
import { EduService } from './education.service';
import { EducationController } from './education.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Education } from 'src/common/entities/education.entity';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [TypeOrmModule.forFeature([Education]), UserModule],
  providers: [EduService],
  controllers: [EducationController]
})
export class EducationModule { }
