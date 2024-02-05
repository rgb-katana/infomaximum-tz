import { FC } from 'react';
import Cars from './pages/Cars/Cars';
import GlobalStyles from './styles/global.styles';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppLayout from './ui/AppLayout';
import { observer } from 'mobx-react';
import Favourite from './pages/Favourite/Favourite';

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

const App: FC = observer(() => {
  return (
    <>
      <GlobalStyles />
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route index element={<Cars />} />
              <Route path="favourite" element={<Favourite />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ApolloProvider>
    </>
  );
});

export default App;
