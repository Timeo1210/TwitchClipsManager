import "dotenv-safe/config";
import "reflect-metadata";

// import { initRepositories } from "@/infrastructure/repositories/init";
import { initAdapters } from "@/infrastructure/adapters/init";
import { initControllers } from "@/interface-adapters/controllers/init";

(async () => {
  // await initRepositories.init();
  await initAdapters.init();
  await initControllers.init();
})();
