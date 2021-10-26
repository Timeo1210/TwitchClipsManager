import { VideoEntity } from "@/core/entity/Video.entity";

export interface GetVideoInput {
  id: string;
}

export interface GetVideoOutput extends VideoEntity {}
