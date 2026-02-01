import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { LoginUserDto } from "./dtos/auth.dto";
import { CreateUserDto } from "src/user/dtos/createUser.dto";

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Post('/signup')
    async register(@Body() body: CreateUserDto) {
        return await this.authService.signUp(body)
    }

    @Post('/login')
    async login(@Body() body: LoginUserDto) {
        return await this.authService.signin({ email: body.email, username: body.username }, body.password)
    }
}