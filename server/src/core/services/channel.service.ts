import {twitchapiPort} from "@/core/ports/twitchapi.port";
import {
  ChannelSearchQueryInput,
  ChannelSearchQueryResponse,
} from "@/core/queries/channel.query";

const search = async (
  input: ChannelSearchQueryInput
): Promise<ChannelSearchQueryResponse[]> => twitchapiPort.searchChannels(input);

export const ChannelService = {
  search,
};
