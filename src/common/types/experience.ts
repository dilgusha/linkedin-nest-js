export interface ExperienceType {
    company: string
    location: string
    startDate: Date
    endDate?: Date | null
    currentWorking: boolean
    description: string
}

export interface UpdateExpType extends Partial<ExperienceType> { }