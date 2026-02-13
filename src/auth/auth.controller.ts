import { Body, Controller, Post, Req, Session } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { LoginUserDto } from "./dtos/auth.dto";
import { CreateUserDto } from "src/user/dtos/createUser.dto";
import { ApiBearerAuth } from "@nestjs/swagger";
import type { SessionData } from "src/common/types/session.type";

@ApiBearerAuth()
@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Post('/signup')
    async register(@Body() body: CreateUserDto, @Req() req: any, @Session() session: SessionData) {
        const { user, access_token } = await this.authService.signUp(body)
        session.userId = user.id
        return { user, access_token }
    }

    @Post('/login')
    async login(@Body() body: LoginUserDto, @Req() req: any, @Session() session: SessionData) {
        const { user, access_token } = await this.authService.signin({ email: body.email, username: body.username }, body.password)
        session.userId = user.id
        return { user, access_token }
    }

    @Post('/logout')
    async logout(@Session() sesion: SessionData) {
        sesion.userId = null
        return { message: 'Logged out' }
    }
}