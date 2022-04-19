import { videostateController } from "@/infrastructure/repositories/sqlite/controllers/videostate.controller";
import {
  getVideostateByIdRequest,
  getVideostateByIdResponse,
  postVideostateRequest,
  postVideostateResponse,
} from "@/infrastructure/repositories/interfaces/videostate/videostate.controller.interface";

const getVideostateById = (
  query: getVideostateByIdRequest
): getVideostateByIdResponse => videostateController.getVideostateById(query);

const postVideostate = (
  command: postVideostateRequest
): postVideostateResponse => videostateController.postVideostate(command);

export const videostatePort = {
  getVideostateById,
  postVideostate,
};
