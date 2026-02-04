import {
    CanActivate,
    ExecutionContext,
    Injectable,
    UnauthorizedException
} from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { UserService } from 'src/user/user.service'

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        private jwtService: JwtService,
        private userService: UserService
    ) { }

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const req = context.switchToHttp().getRequest()
        const authHeader = req.headers.authorization

        if (!authHeader) {
            throw new UnauthorizedException('Token not found')
        }

        const token = authHeader.split(' ')[1]
        if (!token) {
            throw new UnauthorizedException('Token is not provided')
        }

        try {
            const payload = await this.jwtService.verify(token)
            if (!payload.userId) throw new Error();

            const user = await this.userService.findOne(payload.userId)

            if (!user) {
                throw new UnauthorizedException()
            }

            req.user = user

            return true
        } catch (error) {
            throw new UnauthorizedException('Token is invalid')
        }
    }
}
