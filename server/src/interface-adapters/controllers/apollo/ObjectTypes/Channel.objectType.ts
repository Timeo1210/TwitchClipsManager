import { Field, ObjectType, Int } from "type-graphql";

@ObjectType()
export class Channel {
  @Field()
  broadcaster_type: "parter" | "affiliate" | "";

  @Field()
  description: string;

  @Field()
  display_name: string;

  @Field()
  id: string;

  @Field()
  login: string;

  @Field()
  offline_image_url: string;

  @Field()
  profile_image_url: string;

  @Field()
  type: "staff" | "admin" | "global_mod" | "";

  @Field(() => Int)
  view_count: number;

  @Field()
  created_at: number;
}
