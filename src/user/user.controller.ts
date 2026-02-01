import { Body, Controller, Delete, Get, Param, Patch, Query } from "@nestjs/common";
import { UserService } from "./user.service";
import { UpdateUserDto } from "./dtos/updateUser.dto";
import { Serialize } from "src/interceptor/serialize.interceptor";
import { UserDto } from "./dtos/user.dto";

@Controller('users')
@Serialize(UserDto)
export class UserController {
    constructor(public userService: UserService) { }

    @Get('/')
    findUserByEmail(@Query('email') email: string) {
        return this.userService.findByEmail(email)
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