/* eslint-disable max-classes-per-file */
import { Field, ObjectType } from "type-graphql";
import { Pagination } from "./Pagination.objectType";
import { Clip } from "./Clip.objectType";

@ObjectType()
export class Clips {
  @Field(() => [Clip])
  clips: Clip[];

  @Field(() => Pagination)
  pagination: Pagination;
}
