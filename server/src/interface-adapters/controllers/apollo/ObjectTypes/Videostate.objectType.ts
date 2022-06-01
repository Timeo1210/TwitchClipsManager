import { ObjectType, Field } from "type-graphql";
import { VIDEOSTATE } from "@/core/entity/Videostate.entity";

@ObjectType()
export class Videostate {
  @Field()
  video_id: string;

  @Field()
  state: VIDEOSTATE;

  @Field()
  download_url: string;
}
