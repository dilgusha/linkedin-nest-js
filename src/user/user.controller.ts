import { Body, ClassSerializerInterceptor, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UseInterceptors } from "@nestjs/common";
import { UserService } from "./user.service";
import { UserEntity } from "src/user/User.entity";
import { CreateUserDto } from "./dto/create-user.dto";
import { log } from "console";
import { UpdateUserDto } from "./dto/update-user.dto";
import { Serialize, SerializeInterceptor } from "src/interceptors/serialize.interceptos";
import { UserDto } from "./dto/user.dto";
import { ApiTags } from "@nestjs/swagger";

@Controller('user')
@ApiTags('user')
export class UserController {
    constructor(public userService: UserService) { }

    @Get()
    @Serialize(UserDto)
    async findAll() {
        return this.userService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        return this.userService.findOne(parseInt(id));
    }

    @Get()
    async findByEmail(@Body('email') email: string) {
        return this.userService.findByEmail(email);
    }

// 
    @Serialize(UserDto)
    @Post()
    async create(@Body() dto: CreateUserDto) {
        return this.userService.create(dto);
    }


    @Delete(':id')
    async delete(@Param('id') id: string) {
        return this.userService.delete(parseInt(id));
    }

    @Patch(':id')
    async update(@Param('id') id: string, @Body() dto: UpdateUserDto) {
        return this.userService.update(parseInt(id), dto);
    }

}