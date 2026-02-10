import { PartialType } from "@nestjs/swagger"
import { EDegree } from "../enam"

export class EducationType {
    schoolName: string
    degree: EDegree
    faculty: string
    startDate: Date
    endDate: Date
    imageUrl: string
}

export class UpdateEduType extends PartialType(EducationType) { }