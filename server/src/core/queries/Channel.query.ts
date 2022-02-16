import { ChannelSearchEntity } from "@/core/entity/ChannelSearch.entity";
import { ChannelEntity } from "@/core/entity/Channel.entity";

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

export type ChannelGetQueryResponse = ChannelEntity;
