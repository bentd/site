import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import dotenv from "dotenv";
import gql from "graphql-tag";
import fetch from "node-fetch";

dotenv.config();

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: process.env.ENDPOINT,
  fetch: fetch
});

export const client = new ApolloClient({
  cache,
  link
});

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
