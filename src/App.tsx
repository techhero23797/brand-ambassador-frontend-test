import React from 'react';
import { ApolloProvider } from '@apollo/client';
import client from './config/apolloClientConfig';
import Router from './Router';
import './App.css';

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Router />
    </ApolloProvider>
  );
}

export default App;
