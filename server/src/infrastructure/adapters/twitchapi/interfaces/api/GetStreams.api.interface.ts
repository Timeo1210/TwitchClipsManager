export interface GetStreamsApiInput {
  after?: string;
  before?: string;
  first?: number;
  game_id?: string;
  language?: string;
  user_id?: string;
  user_login?: string;
}

export interface GetStreamsApiOutput {
  data:
    | [
        {
          id: string;
          user_id: string;
          user_login: string;
          user_name: string;
          game_id: string;
          game_name: string;
          type: "live" | "";
          title: string;
          viewer_count: number;
          started_at: string;
          language: string;
          thumbnail_url: string;
          tag_ids: string[];
          is_mature: boolean;
        }
      ]
    | [];
  pagination: {
    cursor: string;
  };
}
