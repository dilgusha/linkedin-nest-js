import { Module } from '@nestjs/common';
import { ExperienceService } from './experience.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Experience } from 'src/common/entities/experience.entity';
import { ExperienceController } from './experience.controller';
import { UserModule } from 'src/user/user.module';

@Module({
    imports: [TypeOrmModule.forFeature([Experience]), UserModule],
    providers: [ExperienceService],
    controllers: [ExperienceController]
})

export class ExperienceModule { }
