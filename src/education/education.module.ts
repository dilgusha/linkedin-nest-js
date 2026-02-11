import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { EducationEntity } from "./education.entity";
import { EducationController } from "./education.controller";
import { EducationService } from "./education.service";

@Module({
    imports: [TypeOrmModule.forFeature([EducationEntity])],
    controllers: [EducationController],
    providers: [EducationService],
    exports: [EducationService]
})

export class EducationModule { }