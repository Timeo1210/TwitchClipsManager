import { VideostateEntity } from "./videostate.entity";

export interface getVideostateByIdRequest {
  id: string;
}

export type getVideostateByIdResponse = VideostateEntity | undefined;

export interface postVideostateRequest extends VideostateEntity {}

export type postVideostateResponse = boolean;
