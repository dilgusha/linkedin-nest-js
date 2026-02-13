import { Body, Controller, Delete, Get, Param, Patch, Query, Req, UseGuards } from "@nestjs/common";
import { UserService } from "./user.service";
import { UpdateUserDto } from "./dtos/updateUser.dto";
import { Serialize } from "src/interceptor/serialize.interceptor";
import { UserDto } from "./dtos/user.dto";
import { AuthGuard } from "src/guards/auth.guard";
import { ApiBearerAuth } from "@nestjs/swagger";

@ApiBearerAuth()
@Controller('users')
@Serialize(UserDto)
export class UserController {
    constructor(public userService: UserService) { }

    @Get('/all')
    findAllUsers() {
        return this.userService.findAll()
    }

    @Get('/')
    findUserByEmail(@Query('email') email: string) {
        return this.userService.findByEmail(email)
    }

    @Get('/:id')
    findUser(@Param('id') id: string) {
        return this.userService.findOne(parseInt(id))
    }

    @UseGuards(AuthGuard)
    @Patch('/')
    updateUser(@Req() req: any, @Body() body: UpdateUserDto) {
        return this.userService.update(req.user.id, body)
    }

    @UseGuards(AuthGuard)
    @Delete('/')
    removeUser(@Req() req: any) {
        return this.userService.remove(req.user.id)
    }
}