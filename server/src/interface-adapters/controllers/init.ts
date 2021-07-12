import { expressController } from "./express/config";

export const initControllers = {
  init: (): void => {
    expressController.run();
  },
};
