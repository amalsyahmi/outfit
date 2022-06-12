import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '../users/entities/user.entity';
import { UsersService } from '../users/users.service';
import { LoginUserInput } from './dto/login-user.input';

@Injectable()
export class AuthService {

    constructor(private userService: UsersService, private jwtService: JwtService) { }

    async validateUser(username: string, password: string): Promise<any> {
        const user = await this.userService.findOne(username);

        // TODO: make this more secure
        if (user && user.password === password) {
            const { password, ...result } = user;
            return result;
        }

        return null;
    }

    async login(user: User) {
        return {
            access_token: this.jwtService.sign({username: user.username, sub: user.id}),
            user,
        };
    }
}
