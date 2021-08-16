import { twitchapiPort } from "@/core/ports/twitchapi.port";
import {
  VideoGetByUserQueryInput,
  VideoGetByUserQueryOutput,
} from "@/core/queries/video.query";

const getByUser = async (
  input: VideoGetByUserQueryInput
): Promise<VideoGetByUserQueryOutput | null> => twitchapiPort.getVideos(input);

export const VideoService = {
  getByUser,
};
