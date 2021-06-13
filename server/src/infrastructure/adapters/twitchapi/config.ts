import Ajv from "ajv";
import { TwitchApi } from "./TwitchApi";

import * as SearchChannelsInputSchema from "./schemas/SearchChannelsInput.schema.json";
import * as SearchChannelsOutputSchema from "./schemas/SearchChannelsOutput.schema.json";

import {SearchChannelsInput, SearchChannelsOutput} from "./interfaces/SearchChannels.interface";

const ajv = new Ajv();

export const TwitchApiAdapter = {
  API: new TwitchApi({
    id: "ks25p0pww0j1572hyrv9wdb9tz4hn9",
    secret: "zcah9fiy0jmo9kbpwz0g9gl7rsn3pw",
  }),
  refreshSetup: async (): Promise<number> => TwitchApiAdapter.API.setup(),
  run: async (): Promise<void> => {
    // await TwitchApiAdapter.refreshSetup();
    // const nextSetupTime = 250;
    setTimeout(
      TwitchApiAdapter.refreshSetup,
      86400 * 1000 // 1 day
    );
  },
  Validators: {
    SearchChannels: {
      input: ajv.compile<SearchChannelsInput>(SearchChannelsInputSchema),
      output: ajv.compile<SearchChannelsOutput>(SearchChannelsOutputSchema)
    }
  }
};
