export type SearchChannelsInput = {
  query: string;
  first?: number;
  after?: string;
  live_only?: boolean;
}

export type SearchChannelsOutput = {
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
