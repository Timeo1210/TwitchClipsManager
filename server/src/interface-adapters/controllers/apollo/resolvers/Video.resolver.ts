import { Args, Query, Resolver } from "type-graphql";
import { UserInputError } from "apollo-server-core";

import { VideoService } from "@/core/services/video.service";

import { Video } from "../ObjectTypes/Video.objectType";
import { GetByUserVideoArgs } from "../ArgsTypes/Video.argsType";

@Resolver(Video)
export class VideoResolver {
  @Query(() => [Video])
  async getByUser(@Args() request: GetByUserVideoArgs) {
    try {
      const response = await VideoService.getByUser(request);
      if (response) return response.data;
    } catch {
      throw new Error("Internal Server Error !");
    }
    throw new UserInputError(`Invalid "id" !`);
  }
}
