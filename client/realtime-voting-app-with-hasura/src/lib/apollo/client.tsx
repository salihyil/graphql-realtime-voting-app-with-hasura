"use client";
import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache, split } from "@apollo/client";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { getMainDefinition } from "@apollo/client/utilities";
import { createClient } from "graphql-ws";

const httpLink = new HttpLink({
  uri: process.env.NEXT_PUBLIC_SCHEMAURL as string,
  headers: {
    "x-hasura-admin-secret": process.env.NEXT_PUBLIC_APIKEY as string,
  },
});

const wsLink =
  typeof window !== "undefined"
    ? new GraphQLWsLink(
        createClient({
          url: `ws://${process.env.NEXT_PUBLIC_URL}`,
          connectionParams: {
            headers: {
              "x-hasura-admin-secret": process.env.NEXT_PUBLIC_APIKEY as string,
            },
          },
        })
      )
    : null;

const link =
  typeof window !== "undefined" && wsLink != null
    ? split(
        ({ query }) => {
          const definition = getMainDefinition(query);
          return (
            definition.kind === "OperationDefinition" && definition.operation === "subscription"
          );
        },
        wsLink,
        httpLink
      )
    : httpLink;

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

export function ApolloWrapper({ children }: Readonly<React.PropsWithChildren>) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
