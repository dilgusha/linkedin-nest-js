import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { randomBytes, scrypt as _scrypt } from "crypto";
import { UserService } from "src/user/user.service";
import { promisify } from "util";
import { CreateUserDto } from "src/user/dtos/createUser.dto";

const scrypt = promisify(_scrypt)

@Injectable()
export class AuthService {
    constructor(private userService: UserService) { }

    async signUp(data: CreateUserDto) {
        const { email, password, ...rest } = data
        const users = await this.userService.findByEmail(email)
        if (users) throw new BadRequestException('This user already exists')
        const salt = randomBytes(8).toString('hex')
        const hash = (await scrypt(password, salt, 32)) as Buffer
        const passwordHashed = salt + '.' + hash.toString('hex')
        const user = await this.userService.create({
            email,
            password: passwordHashed,
            ...rest
        })
        return user
    }

    async signin(identifier: { email?: string, username?: string }, password: string) {
        const { email, username } = identifier
        if (!email && !username) throw new BadRequestException('Email or Username required')
        const user = email
            ? await this.userService.findByEmail(email)
            : await this.userService.findByUsername(username!)
        if (!user) throw new NotFoundException('User not found')
        const [salt, storedHash] = user.password.split('.')
        const hash = (await scrypt(password, salt, 32)) as Buffer
        if (hash.toString('hex') !== storedHash) throw new BadRequestException('Password is wrong')
        return user
    }
}