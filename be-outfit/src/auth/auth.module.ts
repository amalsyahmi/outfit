import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { LocalStrategy } from './local.strategy';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from 'src/users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [AuthService, AuthResolver, LocalStrategy, JwtStrategy, PrismaService],
  imports: [PassportModule, UsersModule, JwtModule.register({
    signOptions: {expiresIn: '60s'},
    secret: 'my-secret', //TODO: put in process.env.JWT_SECRET
  })],
})
export class AuthModule {}
