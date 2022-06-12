import { Injectable } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { PrismaService } from '../prisma.service';

@Injectable()
export class UsersService {

  constructor(private prisma: PrismaService) {}

  create(userCreateInput: Prisma.UserCreateInput): Promise<User> {
    return this.prisma.user.create({
      data: userCreateInput,
    });
  }

  findAll() {
    return this.prisma.user.findMany();
  }

  findOne(userWhereInput: Prisma.UserWhereInput) {
    return this.prisma.user.findFirst({
      where: userWhereInput
    });
  }

}
