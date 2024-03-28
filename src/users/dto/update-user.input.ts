import { CreateUserInput } from './create-user.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateUserInput extends PartialType(CreateUserInput) {
  @Field(() => Int)
  id: number;
  @Field(() => String)
  name: string;
  @Field(() => String)
  lastname: string;
  @Field(() => String)
  email: string;
  @Field(() => String)
  username: string;
  @Field(() => String)
  password: string;
}
