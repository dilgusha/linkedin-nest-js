import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserType } from './dto/create-user.dto';
import { UserEntity } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly repository: typeof UserEntity,
  ) {}

  create(params: CreateUserType) {
    const user = this.repository.create(params);
    return this.repository.save(user);
  }

  async findAll() {
    return this.repository.find();
  }
}
