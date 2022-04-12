import { Arg, Args, Mutation, Query, Resolver } from "type-graphql";
import { UserInputError } from "apollo-server-core";

import { VideostateService } from "@/core/services/videostate.service";

import { Videostate } from "../ObjectTypes/Videostate.objectType";
import { GetByIdVideostateArgs } from "../ArgsTypes/Videostate.argsType";
import { PostByIdVideostateInput } from "../InputTypes/Videostate.inputType";

@Resolver(Videostate)
export class VideostateResolver {
  @Query(() => Videostate)
  async Videostate_getById(@Args() request: GetByIdVideostateArgs) {
    try {
      const response = await VideostateService.getById(request);
      if (response) return response;
    } catch {
      throw new Error("Internal Server Error !");
    }
    throw new UserInputError(`Invalid "video_id" !`);
  }

  @Mutation(() => Videostate, { nullable: true })
  async Videostate_postById(@Arg("request") request: PostByIdVideostateInput) {
    try {
      await VideostateService.postById(request);
      return null;
    } catch {
      throw new Error("Internal Server Error !");
    }
  }
}
