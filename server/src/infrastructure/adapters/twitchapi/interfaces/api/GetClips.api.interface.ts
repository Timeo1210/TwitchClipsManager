import { ClipEntity } from "@/core/entity/Clip.entity";
import { GetClipsInput } from "@/infrastructure/adapters/twitchapi/interfaces/GetClips.interface";

export interface GetClipsApiInput extends GetClipsInput {}

export interface GetClipsApiOutput {
  data: ClipEntity[];
  pagination: {
    cursor: string;
  };
}
