import { startStandaloneServer } from "@apollo/server/standalone";
import { readFileSync } from "fs";
import { gql } from "graphql-tag";

import { ApolloServer, BaseContext } from "@apollo/server";
import path from "path";
import { verifyToken } from "./auth/auth-helpers";
import { resolvers } from "./resolvers/resolvers";
import { GraphQLError } from "graphql";

const typeDefs = gql(
  readFileSync(path.resolve(__dirname, "./types/graphql/schema.graphql"), {
    encoding: "utf-8",
  })
);

async function startApolloServer() {
  const server = new ApolloServer<BaseContext>({
    typeDefs,
    resolvers,
    introspection: true,
  });
  const { url } = await startStandaloneServer(server, {
    context: async ({ req, res }) => {
      const token = req.headers.authorization || "";

      const userId = await verifyToken(token);

      if (!userId) {
        throw new GraphQLError("Unauthorized");
      }

      return {
        user: userId,
        dataSources: {},
      };
    },
  });

  console.log(`
      🚀  Server is running
      📭  Query at ${url}
    `);
}

startApolloServer();
