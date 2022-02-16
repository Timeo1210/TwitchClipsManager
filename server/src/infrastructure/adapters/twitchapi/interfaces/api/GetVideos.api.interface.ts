import { VideoEntity } from "@/core/entity/Video.entity";

export interface GetVideosApiOutput {
  data: VideoEntity[];
  pagination: {
    cursor: string;
  };
}
