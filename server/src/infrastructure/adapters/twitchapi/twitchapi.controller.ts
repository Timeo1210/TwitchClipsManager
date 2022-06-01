import { VIDEOSTATE } from "@/core/entity/Videostate.entity";
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
import { GetClipsInput, GetClipsOutput } from "./interfaces/GetClips.interface";
import {
  GenerateMP4Input,
  GenerateMP4Output,
} from "./interfaces/GenerateMP4.interface";

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

const getClips = async (
  input: GetClipsInput
): Promise<GetClipsOutput | null> => {
  try {
    console.log(input);
    const data = await API.getClips(input);
    if (data.data.length >= 1)
      return { clips: data.data, pagination: data.pagination };
    return null;
  } catch {
    return null;
  }
};

const generateMP4 = async (
  input: GenerateMP4Input
): Promise<GenerateMP4Output | null> => {
  try {
    console.log(input);
    const apiInput = `{"operationName":"VideoManager_VideoDownload","variables":{"videoID":"${input.video_id}", "broadcastType":""},"extensions":{"persistedQuery":{"version":1,"sha256Hash":"dc73ae4ca87da62676a42a61866bbe725b41e8859077f438b8718e2083b6db3c"}}}`;
    const { data } = await API.generateMP4({ data: apiInput });

    const videostate: GenerateMP4Output = {
      ...input,
      state: VIDEOSTATE.INVALID,
      download_url: "",
    };
    if (!data.video) return videostate;

    if (data.video.download.status in VIDEOSTATE) {
      videostate.state = data.video.download.status as VIDEOSTATE;
      videostate.download_url = data.video.download.url;
    }

    return videostate;
  } catch (e) {
    console.error(e);
    return null;
  }
};

export const twitchapiController = {
  searchChannels,
  getUser,
  getVideos,
  getVideo,
  getClips,
  generateMP4,
};
