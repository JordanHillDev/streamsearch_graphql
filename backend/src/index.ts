import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

import MoviesAPI from "./moviesAPI.js";
import resolvers from "./resolvers.js";
import typeDefs from "./schema.js";

interface ContextValue {
  dataSources: {
    moviesAPI: MoviesAPI;
  };
}

const server = new ApolloServer<ContextValue>({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  context: async () => {
    const { cache } = server;
    return {
      dataSources: {
        moviesAPI: new MoviesAPI({ cache }),
      },
    };
  },
});

console.log(`🚀  Server ready at ${url}`);
