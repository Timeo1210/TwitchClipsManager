import {twitchapiController} from "@/infrastructure/adapters/twitchapi/twitchapi.controller";

import {SearchChannelsInput, SearchChannelsOutput} from "@/infrastructure/adapters/twitchapi/interfaces/SearchChannels.interface";

const searchChannels = async (
  query: SearchChannelsInput
): Promise<SearchChannelsOutput[]> => twitchapiController.searchChannels(query)

export const twitchapiPort = {
  searchChannels,
}