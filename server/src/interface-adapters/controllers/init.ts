import { expressController } from "./express/config";
import { apolloController } from "./apollo/config";

export const initControllers = {
  init: async (): Promise<void> => {
    await expressController.run();
    await apolloController.run();
  },
};
