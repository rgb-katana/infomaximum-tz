import { Global } from '@emotion/react';
import { FC } from 'react';
import Cars from './pages/Cars/Cars';
import { GLOBAL_STYLES } from './styles/global.styles';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message, locations, path }) => {
      alert(`GraphQL error ${message}`);
    });
  }
});

const link = from([
  errorLink,
  new HttpLink({ uri: 'http://localhost:4000/api' }),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
});

const App: FC = () => {
  return (
    <div>
      <Global styles={GLOBAL_STYLES} />
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Routes>
            <Route>
              <Cars />
            </Route>
          </Routes>
        </BrowserRouter>
      </ApolloProvider>
    </div>
  );
};

export default App;
