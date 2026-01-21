import { Body, Controller, Get, Post } from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDto } from "./dtos/user.dto";

@Controller('users')
export class UserController {
    constructor(public userService: UserService) { }

    @Get()
    async get() {
        return 'Users'
    }

    @Post()
    async createUser(@Body() body: CreateUserDto) {
        console.log(body)
        return 'User created'
    }
}