import { initAdapters } from "@/infrastructure/adapters/init";
import {ChannelService} from "@/core/services/channel.service";

(async () => {
  await initAdapters.init();
  const str = "Sardoche";

  const data = await ChannelService.search({ query: str });
  console.log(data)
})();
