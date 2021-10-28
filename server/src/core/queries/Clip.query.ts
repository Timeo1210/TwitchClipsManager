import { ClipEntity } from "@/core/entity/Clip.entity";

export interface ClipGetByBroadcasterIdQueryInput {
  broadcaster_id: string;
  after?: string;
  before?: string;
  ended_at?: string;
  first?: number;
  started_at?: string;
}

export interface ClipGetByBroadcasterIdQueryOutput {
  clips: ClipEntity[];
  pagination: {
    cursor: string;
  };
}
