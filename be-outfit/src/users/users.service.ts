import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';

@Injectable()
export class UsersService {

  // Mock data
  private readonly users = [
    {
      id: 1,
      username: 'amal',
      password: 'password123'
    },
    {
      id: 2,
      username: 'zira',
      password: 'password123'
    },
  ];
  
  create(createUserInput: CreateUserInput) {
    const user = {
      ...createUserInput,
      id: this.users.length + 1,
    };

    this.users.push(user);
    return user;
  }

  findAll() {
    return this.users;
  }

  findOne(username: string) {
    return this.users.find((user) => user.username === username);
  }

}
