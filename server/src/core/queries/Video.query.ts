import { VideoObject } from "@/core/entity/Video.entity";

export interface VideoGetByUserQueryInput {
  user_id: string;
  after?: string;
  before?: string;
  first?: string;
  period?: "all" | "month" | "week" | "day";
  sort?: "time" | "trending" | "views";
  type?: "all" | "upload" | "archive" | "highlight";
}

export interface VideoGetByUserQueryOutput {
  videos: VideoObject[];
  pagination: {
    cursor: string;
  };
}
