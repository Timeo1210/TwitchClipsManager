export interface GetVideosInput {
  user_id: string;
  after?: string;
  before?: string;
  first?: string;
  period?: "all" | "month" | "week" | "day";
  sort?: "time" | "trending" | "views";
  type?: "all" | "upload" | "archive" | "highlight";
}

interface VideoObject {
  id: string;
  stream_id: string;
  user_id: string;
  user_login: string;
  user_name: string;
  title: string;
  description: string;
  created_at: string;
  published_at: string;
  url: string;
  thumbnail_url: string;
  viewable: "public" | "private";
  view_count: number;
  language: string;
  type: "upload" | "archive" | "highlight";
  duration: string;
  muted_segments: { duration: number; offset: number } | null;
}

export interface GetVideosOutput {
  data: VideoObject[];
  pagination: {
    cursor: string;
  };
}
