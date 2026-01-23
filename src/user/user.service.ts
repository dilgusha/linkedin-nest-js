import { Injectable, NotFoundException } from "@nestjs/common";
import { UserEntity } from "src/user/User.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { FindOneParams, FindParams } from "src/common/types/find.params";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { CreateUserType } from "./user.types";

@Injectable()
export class UserService {
    constructor(@InjectRepository(UserEntity)
    private readonly userRepo: Repository<UserEntity>) { }

    create(params: CreateUserType) {
        const user = this.userRepo.create(params)
        return this.userRepo.save(user);
    }

    async findOne(id: number) {
        const user = await this.userRepo.findOneBy({ id });
        return user;
    }

    async findByEmail(email: string) {
        const users = await this.userRepo.find({ where: { email } });
        return users;
    }

    async findAll() {
        const users = await this.userRepo.find()
        return users;
    }

    async delete(id: number) {
        const user = await this.findOne(id);
        if (!user) throw new NotFoundException('User not found');
        await this.userRepo.remove(user);
        return user;
    }

    async update(id: number, dto: UpdateUserDto) {
        const user = await this.findOne(id)
        if (!user) throw new NotFoundException('User not found');
        // await this.userRepo.update(id, dto);
        Object.assign(user, dto);
        await user.save()
        return user;
    }
}