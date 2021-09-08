import { ChannelSearchEntity } from "@/core/entity/ChannelSearch.entity";

export interface ChannelSearchQueryInput {
  query: string;
  first?: number;
  after?: string;
  live_only?: boolean;
}

export type ChannelSearchQueryResponse = ChannelSearchEntity;

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
