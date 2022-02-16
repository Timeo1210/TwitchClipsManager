import { ArgsType, Field } from "type-graphql";

@ArgsType()
export class GetByBroadcasterIdClipsArgs {
  @Field()
  broadcaster_id: string;

  @Field({ nullable: true })
  after?: string;

  @Field({ nullable: true })
  before?: string;

  @Field({ nullable: true })
  ended_at?: string;

  @Field({ nullable: true })
  first?: number;

  @Field({ nullable: true })
  started_at?: string;
}
