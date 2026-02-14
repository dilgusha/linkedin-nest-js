export interface ExperienceType {
    company: string
    location: string
    startDate: Date
    endDate: Date
    description: string
}

export interface UpdateExpType extends Partial<ExperienceType> { }