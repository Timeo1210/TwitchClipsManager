import { ArgsType, Field, Int } from "type-graphql";
import { Max, Min } from "class-validator";

@ArgsType()
export class QuerySearchArgs {
  @Field()
  query: string;

  @Field(() => Int, { nullable: true })
  @Min(0)
  @Max(100)
  first: number;

  @Field({ nullable: true })
  after: string;

  @Field({ nullable: true })
  live_only: boolean;
}
