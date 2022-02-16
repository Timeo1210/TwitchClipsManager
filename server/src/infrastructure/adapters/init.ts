import { TwitchApiAdapter } from "./twitchapi/config";

export const initAdapters = {
  init: async (): Promise<void> => {
    await TwitchApiAdapter.run();
  },
};
