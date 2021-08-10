import { TwitchApiAdapter } from "./config";

import {
  SearchChannelsInput,
  SearchChannelsOutput,
} from "./interfaces/SearchChannels.interface";
import { GetUserInput, GetUserOutput } from "./interfaces/GetUser.interface";

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

const getUser = async (input: GetUserInput): Promise<GetUserOutput | null> => {
  const data = await API.getUsers(input);
  if (data.length >= 1) return data[0];
  return null;
};

export const twitchapiController = {
  searchChannels,
  getUser,
};
