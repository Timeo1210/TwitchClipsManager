import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class Pagination {
  @Field({ nullable: true })
  cursor: String;
}
