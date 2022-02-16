import { Args, Query, Resolver } from "type-graphql";

import { ChannelService } from "@/core/services/channel.service";

import { SearchChannels } from "../ObjectTypes/SearchChannels.objectType";
import { QuerySearchArgs } from "../ArgsTypes/SearchChannels.argsType";

@Resolver(SearchChannels)
export class SearchChannelsResolver {
  @Query(() => [SearchChannels])
  async search(@Args() request: QuerySearchArgs) {
    if (request.query === "") return [];
    return ChannelService.search(request);
  }
}
