import { twitchapiController } from "@/infrastructure/adapters/twitchapi/twitchapi.controller";

import {
  SearchChannelsInput,
  SearchChannelsOutput,
} from "@/infrastructure/adapters/twitchapi/interfaces/SearchChannels.interface";
import {
  GetUserInput,
  GetUserOutput,
} from "@/infrastructure/adapters/twitchapi/interfaces/GetUser.interface";
import {
  GetVideosInput,
  GetVideosOutput,
} from "@/infrastructure/adapters/twitchapi/interfaces/GetVideos.interface";

const searchChannels = async (
  query: SearchChannelsInput
): Promise<SearchChannelsOutput[]> => twitchapiController.searchChannels(query);

const getUser = async (query: GetUserInput): Promise<GetUserOutput | null> =>
  twitchapiController.getUser(query);

const getVideos = async (
  query: GetVideosInput
): Promise<GetVideosOutput | null> => twitchapiController.getVideos(query);

export const twitchapiPort = {
  searchChannels,
  getUser,
  getVideos,
};
