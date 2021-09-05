/* eslint-disable max-classes-per-file */
import { Args, Query, Resolver } from "type-graphql";
import { UserInputError } from "apollo-server-core";

import { VideoService } from "@/core/services/video.service";

import { Videos } from "../ObjectTypes/Videos.objectType";
import { GetByUserVideoArgs } from "../ArgsTypes/Video.argsType";

@Resolver(Videos)
export class VideoResolver {
  @Query(() => Videos)
  async getByUser(@Args() request: GetByUserVideoArgs) {
    try {
      const response = await VideoService.getByUser(request);
      if (response)
        return {
          videos: response.data,
          pagination: response.pagination,
        };
    } catch {
      throw new Error("Internal Server Error !");
    }
    throw new UserInputError(`Invalid "id" !`);
  }
}
