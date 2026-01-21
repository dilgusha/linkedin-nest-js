import { Controller, Get, Param, ParseIntPipe } from "@nestjs/common";
import { UserService } from "./user.service";
import { UserEntity } from "src/user/User.entity";

@Controller('user')
export class UserController {
    constructor(public userService: UserService) { }

  
}