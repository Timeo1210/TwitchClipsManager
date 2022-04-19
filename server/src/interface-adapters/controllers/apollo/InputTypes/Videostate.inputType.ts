import { Field, InputType } from "type-graphql";

@InputType()
export class PostByIdVideostateInput {
  @Field()
  video_id: string;
}
