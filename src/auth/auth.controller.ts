import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post, Session } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { CreateUserDto } from "src/user/dto/create-user.dto";
import { LoginDto } from "./dto/login.dto";

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Post('/signup')
    async signup(@Body() body: CreateUserDto) {
        return this.authService.signup(body);
    }

    @Post('/signin')
    @HttpCode(200)
    async signin(@Body() body: LoginDto) {
        return this.authService.signin(body.email, body.password);
    }


    @Get('colors/:color')
    setColor(@Param('color') color: string, @Session() session: any) {
        session.color = color;
        return { message: `Color set to ${color}` };
    }


    @Get('colors')
    getColors(@Session() session: any) {
        return  session.color   || 'No color set';
    }
}