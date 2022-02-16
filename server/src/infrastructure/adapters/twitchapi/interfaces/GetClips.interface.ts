import { ClipEntity } from "@/core/entity/Clip.entity";

export interface GetClipsInput {
  broadcaster_id: string;
  after?: string;
  before?: string;
  ended_at?: string;
  first?: number;
  started_at?: string;
}

export interface GetClipsOutput {
  clips: ClipEntity[];
  pagination: {
    cursor: string;
  };
}
