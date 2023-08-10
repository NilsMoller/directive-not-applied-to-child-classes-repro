import { Directive, Field, ID, ObjectType } from "@nestjs/graphql";

@ObjectType({
  isAbstract: true,
})
@Directive('@key(fields: "id")')
export class ModelBase {
  @Field((type) => ID)
  id: number;
}
