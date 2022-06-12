import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Prisma, User } from '@prisma/client';
import { UsersService } from '../users/users.service';
import { PrismaService } from '../prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {

    constructor(private userService: UsersService, private jwtService: JwtService, private prisma: PrismaService) { }

    async validateUser(username: string, password: string): Promise<any> {
        const user = await this.userService.findOne({ username });


        if (user) {
            const valid = await bcrypt.compare(password, user.password);

            if (valid) {
                const { password, ...result } = user;
                return result;
            }
        }

        return null;
    }

    async login(user: User) {
        return {
            access_token: this.jwtService.sign({ username: user.username, sub: user.id }),
            user,
        };
    }

    async signup(loginUserInput: Prisma.UserCreateInput) {
        const user = await this.userService.findOne({ username: loginUserInput.username });

        if (user) {
            throw new Error('User already exists!');
        }

        const hashedPassword = await bcrypt.hash(loginUserInput.password, 10);

        return this.userService.create({
            ...loginUserInput,
            password: hashedPassword
        });
    }
}
