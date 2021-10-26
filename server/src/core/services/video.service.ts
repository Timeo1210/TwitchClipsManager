import { twitchapiPort } from "@/core/ports/twitchapi.port";
import {
  VideoGetByUserQueryInput,
  VideoGetByUserQueryOutput,
  VideoGetByIdQueryInput,
  VideoGetByIdQueryOutput,
} from "@/core/queries/Video.query";

const getByUser = async (
  input: VideoGetByUserQueryInput
): Promise<VideoGetByUserQueryOutput | null> => twitchapiPort.getVideos(input);

const getById = async (
  input: VideoGetByIdQueryInput
): Promise<VideoGetByIdQueryOutput | null> => twitchapiPort.getVideo(input);

export const VideoService = {
  getByUser,
  getById,
};
