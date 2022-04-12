import {
  getVideostateByIdRequest,
  getVideostateByIdResponse,
  postVideostateRequest,
  postVideostateResponse,
} from "@/infrastructure/repositories/interfaces/videostate/videostate.controller.interface";
import { VideostateEntity } from "@/core/entity/Videostate.entity";
import { db } from "../config";

const getVideostateById = (
  request: getVideostateByIdRequest
): getVideostateByIdResponse => {
  try {
    const videostateQuery: VideostateEntity | undefined = db
      .prepare(`SELECT id,state FROM videos WHERE id=?`)
      .get(request.id);

    return videostateQuery;
  } catch {
    return undefined;
  }
};

const postVideostate = (
  request: postVideostateRequest
): postVideostateResponse => {
  try {
    db.prepare(`INSERT OR IGNORE INTO videos VALUES (?, ?)`).run(request.id);
    return true;
  } catch {
    return false;
  }
};

export const videostateController = {
  getVideostateById,
  postVideostate,
};
