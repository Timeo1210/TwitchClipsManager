import { ApolloServer } from "apollo-server-express";
import {
  ApolloServerPluginLandingPageDisabled,
  ApolloServerPluginLandingPageGraphQLPlayground,
} from "apollo-server-core";
import { buildSchema } from "type-graphql";

import { expressController } from "@/interface-adapters/controllers/express/config";

import { HelloResolver } from "./resolvers/hello.resolver";
import { SearchChannelsResolver } from "./resolvers/searchChannels.resolver";
import { ChannelResolver } from "./resolvers/Channel.resolver";
import { VideosResolver } from "./resolvers/Videos.resolver";
import { VideoResolver } from "./resolvers/Video.resolver";
import { ClipsResolver } from "./resolvers/Clips.resolver";

export const apolloController = {
  run: async () => {
    const apolloServer = new ApolloServer({
      plugins: [
        process.env.NODE_ENV === "production"
          ? ApolloServerPluginLandingPageDisabled()
          : ApolloServerPluginLandingPageGraphQLPlayground(),
      ],
      schema: await buildSchema({
        resolvers: [
          HelloResolver,
          SearchChannelsResolver,
          ChannelResolver,
          VideosResolver,
          VideoResolver,
          ClipsResolver,
        ],
      }),
    });
    await apolloServer.start();

    apolloServer.applyMiddleware({
      app: expressController.expressApp,
      cors: false,
    });
  },
};
