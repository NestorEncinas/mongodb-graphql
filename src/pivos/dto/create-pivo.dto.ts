import { ObjectType, Field, ID } from 'type-graphql';

@ObjectType()
export class PivoType {
  @Field(() => ID)
  id: string;
  @Field()
  readonly name: string;
}
