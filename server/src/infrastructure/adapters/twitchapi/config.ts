import { TwitchApi } from "./TwitchApi";

export const TwitchApiAdapter = {
  API: new TwitchApi({
    id: process.env.TWITCHAPI_CLIENT || "",
    secret: process.env.TWITCHAPI_SECRET || "",
    gql_id: process.env.TWITCHAPI_GQL_CLIENT || "",
  }),
  refreshSetup: async (): Promise<void> => {
    console.log("Refreshing Twitch Setup...");
    TwitchApiAdapter.API.setup();
  },
  run: async (): Promise<void> => {
    if (process.env.TWITCHAPI_ENABLE === "true") {
      await TwitchApiAdapter.refreshSetup();
    }
    // const nextSetupTime = 250;
    setTimeout(
      TwitchApiAdapter.refreshSetup,
      1.8e6 // 30 min
    );
  },
};
