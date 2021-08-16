import { ArgsType, Field } from "type-graphql";

@ArgsType()
export class GetByUserVideoArgs {
  @Field()
  user_id: string;

  @Field({ nullable: true })
  after?: string;

  @Field({ nullable: true })
  before?: string;

  @Field({ nullable: true })
  first?: string;

  @Field({ nullable: true })
  period?: "all" | "month" | "week" | "day";

  @Field({ nullable: true })
  sort?: "time" | "trending" | "views";

  @Field({ nullable: true })
  type?: "all" | "upload" | "archive" | "highlight";
}
