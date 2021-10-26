/* eslint-disable max-classes-per-file */
import { Args, Query, Resolver } from "type-graphql";
import { UserInputError } from "apollo-server-core";

import { VideoService } from "@/core/services/video.service";

import { Videos } from "../ObjectTypes/Videos.objectType";
import { GetByUserVideosArgs } from "../ArgsTypes/Videos.argsType";

@Resolver(Videos)
export class VideosResolver {
  @Query(() => Videos)
  async getByUser(@Args() request: GetByUserVideosArgs) {
    try {
      const response = await VideoService.getByUser(request);
      if (response) return response;
    } catch {
      throw new Error("Internal Server Error !");
    }
    throw new UserInputError(`Invalid "id" !`);
  }
}
