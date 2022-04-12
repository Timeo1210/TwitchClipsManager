export enum VIDEOSTATE {
  INVALID = "INVALID",
  SUBMITTED = "SUBMITTED",
  DOWNLOADING = "DOWNLOADING",
  TRANSMUXING = "TRANSMUXING",
  COMPLETE = "COMPLETE",
}

export interface VideostateEntity {
  video_id: string;
  state: VIDEOSTATE;
  download_url: string;
}
