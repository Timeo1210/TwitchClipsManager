import { twitchapiPort } from "@/core/ports/twitchapi.port";
import {
  ClipGetByBroadcasterIdQueryInput,
  ClipGetByBroadcasterIdQueryOutput,
} from "@/core/queries/Clip.query";

const getByBroadcasterId = async (
  input: ClipGetByBroadcasterIdQueryInput
): Promise<ClipGetByBroadcasterIdQueryOutput | null> =>
  twitchapiPort.getClips(input);

export const ClipService = {
  getByBroadcasterId,
};
