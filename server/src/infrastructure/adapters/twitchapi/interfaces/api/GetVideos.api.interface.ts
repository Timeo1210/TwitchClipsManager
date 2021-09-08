import { VideoObject } from "@/core/entity/Video.entity";

export interface GetVideosApiOutput {
  data: VideoObject[];
  pagination: {
    cursor: string;
  };
}
