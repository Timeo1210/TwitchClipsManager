import { ChannelEntity } from "@/core/entity/Channel.entity";

export interface GetUserInput {
  id: string;
}

export type GetUserOutput = ChannelEntity;
