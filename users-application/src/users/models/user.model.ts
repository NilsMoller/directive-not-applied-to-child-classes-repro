import { Directive, Field, ID, ObjectType } from '@nestjs/graphql';
import { ModelBase } from "./model.base";

@ObjectType()
export class User extends ModelBase {
  @Field()
  name: string;
}
