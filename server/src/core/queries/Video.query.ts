import { VideoEntity } from "@/core/entity/Video.entity";
import { GetVideosInput } from "@/infrastructure/adapters/twitchapi/interfaces/GetVideos.interface";
import { GetVideoInput } from "@/infrastructure/adapters/twitchapi/interfaces/GetVideo.interface";

export interface VideoGetByUserQueryInput extends GetVideosInput {}

export interface VideoGetByUserQueryOutput {
  videos: VideoEntity[];
  pagination: {
    cursor: string;
  };
}

export interface VideoGetByIdQueryInput extends GetVideoInput {}

export type VideoGetByIdQueryOutput = VideoEntity;
