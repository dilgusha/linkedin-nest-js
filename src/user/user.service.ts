import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/common/entities/user.entity";
import { Repository } from "typeorm";
import { CreateUserDto } from "./dtos/createUser.dto";
import { Role } from "src/common/enam";

@Injectable()
export class UserService {
    constructor(@InjectRepository(User) private repo: Repository<User>) {
    }

    create(data: CreateUserDto) {
        const user = this.repo.create({
            ...data,
            role: Role.USER,
            isVisibility: false
        })
        return this.repo.save(user)
    }

    findOne(id: number) {
        return this.repo.findOneBy({ id })
    }

    async findOrFail(id: number) {
        const user = await this.repo.findOneBy({ id })
        if (!user) throw new NotFoundException('User not found')
        return user
    }

    find(email: string) {
        return this.repo.find({ where: { email } })
    }

    async update(id: number, attrs: Partial<User>) {
        const user = await this.findOrFail(id)
        Object.assign(user, attrs)
        return user
    }

    async remove(id: number) {
        const user = await this.findOrFail(id)
        return user
    }

}