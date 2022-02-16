import { Args, Query, Resolver } from "type-graphql";
import { UserInputError } from "apollo-server-core";

import { ClipService } from "@/core/services/clip.service";

import { Clips } from "../ObjectTypes/Clips.objectType";
import { GetByBroadcasterIdClipsArgs } from "../ArgsTypes/Clips.argsType";

@Resolver()
export class ClipsResolver {
  @Query(() => Clips)
  async getByBroadcasterId(@Args() request: GetByBroadcasterIdClipsArgs) {
    try {
      const response = await ClipService.getByBroadcasterId(request);
      if (response) return response;
    } catch {
      throw new Error("Internal Server Error !");
    }
    throw new UserInputError(`Invalid "id" !`);
  }
}
