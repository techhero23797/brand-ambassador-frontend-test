import {
    ApolloClient,
    InMemoryCache,
  } from "@apollo/client";

const client = new ApolloClient({
    uri: 'https://master-bb-ta-frontend-3tunt6sv4q-ez.a.run.app/graphql',
    cache: new InMemoryCache()
  });

  export default client;