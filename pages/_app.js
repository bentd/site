import { ApolloClient, HttpLink, InMemoryCache, from } from "@apollo/client";
import { onError } from "@apollo/client/link/error";


import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import "../public/css/style.css";
import "../public/css/terminal.css";


const httpLink = new HttpLink({
  uri: process.env.ENDPOINT,
  credentials: 'same-origin',
  headers: {
    Authorization: `Bearer ${process.env.ACCESS_TOKEN}`
  }
});


const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path }) => {
      console.log(
        `[GraphQL error]: Message: ${message}, ` + 
        `Location: ${locations}, ` + 
        `Path: ${path}`
      );
    })
  }
  if (networkError) {
    console.log(`[Network error]: ${networkError}`);
  }
});


export const client = new ApolloClient({
  link: from([errorLink, httpLink]),
  cache: new InMemoryCache()
});


export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}