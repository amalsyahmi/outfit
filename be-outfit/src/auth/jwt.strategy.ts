import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: 'my-secret', //TODO: put in process.env.JWT_SECRET
            logging: true,
        });
    }

    async validate(payload: any){ // payload = decoded JWT
        return {
            userId: payload.sub,
            username: payload.username,
        };
    }
}