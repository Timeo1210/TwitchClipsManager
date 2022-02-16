import { ArgsType, Field } from "type-graphql";

@ArgsType()
export class GetChannelArgs {
  @Field()
  id: string;
}
