import { Args, Query, Resolver } from "type-graphql";
import { UserInputError } from "apollo-server-core";

import { ChannelService } from "@/core/services/channel.service";

import { Channel } from "../ObjectTypes/Channel.objectType";
import { GetChannelArgs } from "../ArgsTypes/Channel.argsType";

@Resolver(Channel)
export class ChannelResolver {
  @Query(() => Channel)
  async Channel_get(@Args() request: GetChannelArgs) {
    if (request.id === "") throw new UserInputError(`Invalid "id" !`);
    try {
      const response = await ChannelService.get(request);
      if (response) return response;
    } catch {
      throw new Error("Internal Server Error !");
    }
    throw new UserInputError(`Invalid "id" !`);
  }
}
