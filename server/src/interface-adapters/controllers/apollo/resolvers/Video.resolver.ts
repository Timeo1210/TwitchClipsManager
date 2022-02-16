import { Args, Query, Resolver } from "type-graphql";
import { UserInputError } from "apollo-server-core";

import { VideoService } from "@/core/services/video.service";

import { Video } from "../ObjectTypes/Video.objectType";
import { GetByIdVideoArgs } from "../ArgsTypes/Video.argsType";

@Resolver(Video)
export class VideoResolver {
  @Query(() => Video)
  async getById(@Args() request: GetByIdVideoArgs) {
    try {
      const response = await VideoService.getById(request);
      if (response) return response;
    } catch {
      throw new Error("Internal Server Error !");
    }
    throw new UserInputError(`Invalid "id" !`);
  }
}
