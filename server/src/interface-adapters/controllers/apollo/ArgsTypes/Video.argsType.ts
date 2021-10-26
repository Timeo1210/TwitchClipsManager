import { ArgsType, Field } from "type-graphql";

@ArgsType()
export class GetByIdVideoArgs {
  @Field()
  id: string;
}
