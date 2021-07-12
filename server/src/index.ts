import { initAdapters } from "@/infrastructure/adapters/init";
import { initControllers } from "@/interface-adapters/controllers/init";
import { ChannelService } from "@/core/services/channel.service";

(async () => {
  await initAdapters.init();
  await initControllers.init();
  const str = "Sardoche";

  const data = await ChannelService.search({ query: str });
  console.log(data);
})();
