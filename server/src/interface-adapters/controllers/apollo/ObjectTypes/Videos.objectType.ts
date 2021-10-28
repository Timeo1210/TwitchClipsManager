/* eslint-disable max-classes-per-file */
import { Field, ObjectType } from "type-graphql";
import { Pagination } from "./Pagination.objectType";
import { Video } from "./Video.objectType";

@ObjectType()
export class Videos {
  @Field(() => [Video])
  videos: Video[];

  @Field(() => Pagination)
  pagination: Pagination;
}
