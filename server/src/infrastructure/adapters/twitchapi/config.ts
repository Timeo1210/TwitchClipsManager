import Ajv from "ajv";
import { TwitchApi } from "./TwitchApi";

import * as SearchChannelsInputSchema from "./schemas/SearchChannelsInput.schema.json";
import * as SearchChannelsOutputSchema from "./schemas/SearchChannelsOutput.schema.json";

import {
  SearchChannelsInput,
  SearchChannelsOutput,
} from "./interfaces/SearchChannels.interface";

const ajv = new Ajv();

export const TwitchApiAdapter = {
  API: new TwitchApi({
    id: process.env.TWITCHAPI_CLIENT || "",
    secret: process.env.TWITCHAPI_SECRET || "",
    gql_id: process.env.TWITCHAPI_GQL_CLIENT || "",
  }),
  refreshSetup: async (): Promise<number> => TwitchApiAdapter.API.setup(),
  run: async (): Promise<void> => {
    if (process.env.TWITCHAPI_ENABLE === "true") {
      await TwitchApiAdapter.refreshSetup();
    }
    // const nextSetupTime = 250;
    setTimeout(
      TwitchApiAdapter.refreshSetup,
      86400 * 1000 // 1 day
    );
  },
  Validators: {
    SearchChannels: {
      input: ajv.compile<SearchChannelsInput>(SearchChannelsInputSchema),
      output: ajv.compile<SearchChannelsOutput>(SearchChannelsOutputSchema),
    },
  },
};
