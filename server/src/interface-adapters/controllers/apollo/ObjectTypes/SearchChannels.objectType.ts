import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class SearchChannels {
  @Field()
  broadcaster_language: string;

  @Field()
  broadcaster_login: string;

  @Field()
  display_name: string;

  @Field()
  game_id: string;

  @Field()
  game_name: string;

  @Field()
  id: string;

  @Field()
  is_live: boolean;

  @Field(() => [String])
  tag_ids: string[];

  @Field()
  thumbnail_url: string;

  @Field()
  title: string;

  @Field()
  started_at: string;
}
