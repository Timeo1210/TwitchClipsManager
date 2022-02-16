import { twitchapiPort } from "@/core/ports/twitchapi.port";
import {
  ChannelSearchQueryInput,
  ChannelSearchQueryResponse,
  ChannelGetQueryInput,
  ChannelGetQueryResponse,
} from "@/core/queries/Channel.query";

const search = async (
  input: ChannelSearchQueryInput
): Promise<ChannelSearchQueryResponse[]> => twitchapiPort.searchChannels(input);

const get = async (
  input: ChannelGetQueryInput
): Promise<ChannelGetQueryResponse | null> => {
  const userFetched = twitchapiPort.getUser(input);
  if (userFetched) return userFetched;
  return null;
};

export const ChannelService = {
  search,
  get,
};
