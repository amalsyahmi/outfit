import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {

  @Field({ description: 'Username' })
  username: string;

  @Field({ description: 'User password'})
  password: string;
}
