import { Injectable } from "@nestjs/common";
import { UserEntity } from "src/user/User.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { FindOneParams, FindParams } from "src/common/types/find.params";

@Injectable()
export class UserService {
    constructor(@InjectRepository(UserEntity)
    private readonly userRepo: Repository<UserEntity>) { }


    async find(params: FindParams<UserEntity>) {
        const { where, select, relations, order, limit, page } = params;
        if (limit && page) {
            return await this.userRepo.find({
                where,
                select,
                relations,
                order,
                take: limit,
                skip: (page - 1) * limit,
            });
        }
    }


    async findOne(param: FindOneParams<UserEntity>) {
        const { where, select, relations } = param;
        return await this.userRepo.findOne({
            where,
            select,
            relations
        });
    }
}
