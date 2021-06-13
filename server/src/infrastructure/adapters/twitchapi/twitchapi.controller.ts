import { TwitchApiAdapter } from "./config";

import { SearchChannelsInput, SearchChannelsOutput } from "./interfaces/SearchChannels.interface";

const { API, Validators } = TwitchApiAdapter;
// no direct expoprt
const searchChannels = async (
  input: SearchChannelsInput
): Promise<SearchChannelsOutput[]> => {
  if (Validators.SearchChannels.input(input)) {
    console.log(input);
    const data = await API.searchChannels(input);
    if (Validators.SearchChannels.output(data)) {
      return data;
    }
  }
  return [];
};

export const twitchapiController = {
  searchChannels,
}
