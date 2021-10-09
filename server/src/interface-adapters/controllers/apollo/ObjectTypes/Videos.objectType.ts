/* eslint-disable max-classes-per-file */
import { Field, ObjectType } from "type-graphql";
import { Video } from "./Video.objectType";

@ObjectType()
class Pagination {
  @Field({ nullable: true })
  cursor: String;
}

@ObjectType()
export class Videos {
  @Field(() => [Video])
  videos: Video[];

  @Field(() => Pagination)
  pagination: Pagination;
}
