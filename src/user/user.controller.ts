import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDto } from "./dtos/createUser.dto";
import { UpdateUserDto } from "./dtos/updateUser.dto";
import { Serialize } from "src/interceptor/serialize.interceptor";
import { UserDto } from "./dtos/user.dto";

@Controller('users')
@Serialize(UserDto)
export class UserController {
    constructor(public userService: UserService) { }

    @Get('/')
    findAllUsers(@Query('email') email: string) {
        return this.userService.find(email)
    }

    @Post('/signup')
    async createUser(@Body() body: CreateUserDto) {
        return this.userService.create(body)
    }

    @Get('/:id')
    findUser(@Param('id') id: string) {
        return this.userService.findOne(parseInt(id))
    }

    @Patch('/:id')
    updateUser(@Param('id') id: string, @Body() body: UpdateUserDto) {
        return this.userService.update(parseInt(id), body)
    }

    @Delete('/:id')
    removeUser(@Param('id') id: string) {
        return this.userService.remove(parseInt(id))
    }
}