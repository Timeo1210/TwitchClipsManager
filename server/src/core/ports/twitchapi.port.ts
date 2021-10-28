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
import {
  GetVideoInput,
  GetVideoOutput,
} from "@/infrastructure/adapters/twitchapi/interfaces/GetVideo.interface";
import {
  GetClipsInput,
  GetClipsOutput,
} from "@/infrastructure/adapters/twitchapi/interfaces/GetClips.interface";

const searchChannels = async (
  query: SearchChannelsInput
): Promise<SearchChannelsOutput[]> => twitchapiController.searchChannels(query);

const getUser = async (query: GetUserInput): Promise<GetUserOutput | null> =>
  twitchapiController.getUser(query);

const getVideos = async (
  query: GetVideosInput
): Promise<GetVideosOutput | null> => twitchapiController.getVideos(query);

const getVideo = async (query: GetVideoInput): Promise<GetVideoOutput | null> =>
  twitchapiController.getVideo(query);

const getClips = async (query: GetClipsInput): Promise<GetClipsOutput | null> =>
  twitchapiController.getClips(query);

export const twitchapiPort = {
  searchChannels,
  getUser,
  getVideos,
  getVideo,
  getClips,
};
