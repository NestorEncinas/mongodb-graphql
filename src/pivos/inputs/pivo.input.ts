import { Field, InputType } from 'type-graphql';

@InputType()
export class PivoInput {
  @Field()
  name: string;
}
