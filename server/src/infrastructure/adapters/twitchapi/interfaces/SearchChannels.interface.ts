import { ChannelSearchEntity } from "@/core/entity/ChannelSearch.entity";

export type SearchChannelsInput = {
  query: string;
  first?: number;
  after?: string;
  live_only?: boolean;
};

export type SearchChannelsOutput = ChannelSearchEntity;
