import { VideoEntity } from "@/core/entity/Video.entity";

export interface GetVideosInput {
  user_id: string;
  after?: string;
  before?: string;
  first?: string;
  period?: "all" | "month" | "week" | "day";
  sort?: "time" | "trending" | "views";
  type?: "all" | "upload" | "archive" | "highlight";
}

export interface GetVideosOutput {
  videos: VideoEntity[];
  pagination: {
    cursor: string;
  };
}
