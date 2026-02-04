import { BadRequestException, Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { randomBytes, scrypt, Sign } from "crypto";
import { UserService } from "src/user/user.service";
import { CreateUserType } from "src/user/user.types";

import { promisify } from "util";
const scryptAsync = promisify(scrypt);

@Injectable()
export class AuthService {
    constructor(private userService: UserService,
        private jwtService: JwtService
    ) { }


    async signup(params: CreateUserType) {
        const users = await this.userService.findByEmail(params.email);
        if (users.length) {
            throw new BadRequestException('Email already exists');
        }

        const salt = randomBytes(8).toString('hex');
        const hash = (await scryptAsync(params.password, salt, 32)) as Buffer;
        const result = salt + '.' + hash.toString('hex');

        const user = await this.userService.create({
            ...params,
            password: result
        });

        const token = this.jwtService.sign({ userId: user.id });

        return {
            user,
            token
        };
    }


    async signin(email: string, password: string) {
        const user = await this.userService.findByEmail(email);
        if (user.length === 0) {
            throw new BadRequestException('Invalid email or password');
        }

        const [salt, storedHash] = user[0].password.split('.');
        const hash = (await scryptAsync(password, salt, 32)) as Buffer;

        if (hash.toString('hex') !== storedHash) {
            throw new BadRequestException('Invalid email or password');
        }

        const token = this.jwtService.sign({ userId: user[0].id });

        return {
            user: user[0],
            token
        };
    }

}