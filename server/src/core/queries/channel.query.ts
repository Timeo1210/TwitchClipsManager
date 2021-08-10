export interface ChannelSearchQueryInput {
  query: string;
  first?: number;
  after?: string;
  live_only?: boolean;
}

export interface ChannelSearchQueryResponse {
  broadcaster_language: string;
  broadcaster_login: string;
  display_name: string;
  game_id: string;
  game_name: string;
  id: string;
  is_live: boolean;
  tag_ids: string[];
  thumbnail_url: string;
  title: string;
  started_at: string;
}

export interface ChannelGetQueryInput {
  id: string;
}

export interface ChannelGetQueryResponse {
  broadcaster_type: "parter" | "affiliate" | "";
  description: string;
  display_name: string;
  id: string;
  login: string;
  offline_image_url: string;
  profile_image_url: string;
  type: "staff" | "admin" | "global_mod" | "";
  view_count: number;
  created_at: string;
}
