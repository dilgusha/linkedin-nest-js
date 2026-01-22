import { UserService } from './user.service';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('user')
export class UserController {
  constructor(public userService: UserService) {}

  @Get('/get')
  async getUser() {
    return 'User controller';
  }

  @Post()
  async createUser(@Body() body: CreateUserDto) {
    console.log(body);

    return 'Create User';
  }
}
