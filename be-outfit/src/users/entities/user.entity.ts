import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field(() => Int, { description: 'User ID' })
  id: number;

  @Field({ description: 'Username' })
  username: string;
  
}
