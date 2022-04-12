import { twitchapiPort } from "@/core/ports/twitchapi.port";
import {
  VideostateGetByIdQueryInput,
  VideostateGetByIdQueryOutput,
} from "@/core/queries/Videostate.query";
import {
  VideostatePostCommandInput,
  VideostatePostCommandOutput,
} from "@/core/commands/Videostate.command";

const getById = async (
  input: VideostateGetByIdQueryInput
): Promise<VideostateGetByIdQueryOutput | null> =>
  twitchapiPort.generateMP4(input);

const postById = async (
  input: VideostatePostCommandInput
): Promise<VideostatePostCommandOutput> => {
  twitchapiPort.generateMP4(input);
};

export const VideostateService = {
  getById,
  postById,
};
