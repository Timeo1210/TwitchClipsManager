import { ArgsType, Field } from "type-graphql";

@ArgsType()
export class GetByIdVideostateArgs {
  @Field()
  video_id: string;
}
