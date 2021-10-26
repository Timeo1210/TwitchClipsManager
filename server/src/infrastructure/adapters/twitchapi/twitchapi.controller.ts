import { TwitchApiAdapter } from "./config";

import {
  SearchChannelsInput,
  SearchChannelsOutput,
} from "./interfaces/SearchChannels.interface";
import { GetUserInput, GetUserOutput } from "./interfaces/GetUser.interface";
import {
  GetVideosInput,
  GetVideosOutput,
} from "./interfaces/GetVideos.interface";
import { GetVideoInput, GetVideoOutput } from "./interfaces/GetVideo.interface";

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

const getVideos = async (
  input: GetVideosInput
): Promise<GetVideosOutput | null> => {
  try {
    console.log(input);
    const isBroadcasterStreaming =
      (await API.getStreams({ user_id: input.user_id })).data.length !== 0; // get broadcaster stream to remove unused video

    const data = await API.getVideos({
      ...input,
      first: isBroadcasterStreaming
        ? (parseInt(input.first || "20", 10) + 1).toString()
        : input.first,
    });

    if (isBroadcasterStreaming) data.data.shift();
    return { videos: data.data, pagination: data.pagination };
  } catch {
    return null;
  }
};

const getVideo = async (
  input: GetVideoInput
): Promise<GetVideoOutput | null> => {
  try {
    console.log(input);
    const { data } = await API.getVideos(input);
    if (data.length >= 1) return data[0];
    return null;
  } catch {
    return null;
  }
};

export const twitchapiController = {
  searchChannels,
  getUser,
  getVideos,
  getVideo,
};
