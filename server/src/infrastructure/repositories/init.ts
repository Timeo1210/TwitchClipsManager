import { sqliteRepository } from "./sqlite/config";

export const initRepositories = {
  init: async (): Promise<void> => {
    await sqliteRepository.run();
  },
};
