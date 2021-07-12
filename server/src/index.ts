import "dotenv-safe/config";
import "reflect-metadata";

import { initAdapters } from "@/infrastructure/adapters/init";
import { initControllers } from "@/interface-adapters/controllers/init";

(async () => {
  await initAdapters.init();
  await initControllers.init();
})();
