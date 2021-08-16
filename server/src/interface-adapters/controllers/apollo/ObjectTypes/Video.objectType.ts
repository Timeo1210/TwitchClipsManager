import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class Video {
  @Field()
  id: string;

  @Field()
  stream_id: string;

  @Field()
  user_id: string;

  @Field()
  user_login: string;

  @Field()
  user_name: string;

  @Field()
  title: string;

  @Field()
  description: string;

  @Field()
  created_at: string;

  @Field()
  published_at: string;

  @Field()
  url: string;

  @Field()
  thumbnail_url: string;

  @Field()
  viewable: "public" | "private";

  @Field()
  view_count: number;

  @Field()
  language: string;

  @Field()
  type: "upload" | "archive" | "highlight";

  @Field()
  duration: string;

  // @Field()
  // muted_segments: { duration: number; offset: number } | null;

  @Field()
  muted_segments: string;
}
