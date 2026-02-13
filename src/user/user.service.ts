import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/common/entities/user.entity";
import { Repository } from "typeorm";
import { Role } from "src/common/enam";
import { UpdateUserDto } from "./dtos/updateUser.dto";
import { CreateUserDto } from "./dtos/createUser.dto";

@Injectable()
export class UserService {
    constructor(@InjectRepository(User) private repo: Repository<User>) { }

    create(data: CreateUserDto) {
        const user = this.repo.create({
            ...data,
            role: Role.USER,
            isVisibility: false
        })
        return this.repo.save(user)
    }

    async findAll() {
        return this.repo.find()
    }

    async findOne(id: number) {
        const user = await this.repo.findOneBy({ id })
        if (!user) throw new NotFoundException('User by this id not found')
        return user
    }

    async findOrFail(id: number) {
        const user = await this.repo.findOneBy({ id })
        if (!user) throw new NotFoundException('User not found')
        return user
    }

    async findByEmail(email: string) {
        return this.repo.findOne({
            where: { email },
        })
    }

    async findByUsername(username: string) {
        return this.repo.findOne({
            where: { username },
        })
    }

    async update(id: number, attrs: UpdateUserDto) {
        const user = await this.findOne(id)
        for (const key in attrs) {
            const value = attrs[key]
            if (value !== undefined && value !== null) user[key] = value
        }
        await this.repo.save(user)
        return user
    }

    async remove(id: number) {
        const user = await this.findOne(id)
        await this.repo.remove(user)
        return true
    }
}

