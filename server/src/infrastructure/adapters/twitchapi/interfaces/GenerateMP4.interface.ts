import { VideostateEntity } from "@/core/entity/Videostate.entity";

export interface GenerateMP4Input {
  video_id: string;
}

export interface GenerateMP4Output extends VideostateEntity {}
