import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field(() => Int, { description: 'User ID' })
  id: number;

  @Field({ description: 'Username' })
  username: string;

  @Field({ description: 'User password'})
  password: string;
}
