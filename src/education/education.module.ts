import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { EducationEntity } from "./education.entity";
import { EducationController } from "./education.controller";
import { EducationService } from "./education.service";
import { UserModule } from "src/user/user.module";

@Module({
    imports: [TypeOrmModule.forFeature([EducationEntity]),UserModule],
    controllers: [EducationController],
    providers: [EducationService],
    exports: [EducationService]
})

export class EducationModule { }