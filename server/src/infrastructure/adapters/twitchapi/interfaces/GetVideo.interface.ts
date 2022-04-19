import { VideoTwitchapiEntity } from "./entity/Video.twitchapi.entity";

export interface GetVideoInput {
  id: string;
}

export type GetVideoOutput = VideoTwitchapiEntity;
