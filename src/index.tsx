import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Home from 'pages/Home';
import GlobalStyles from './GlobalStyles';
import { ThemeProvider, StyleSheetManager } from 'styled-components';
import theme from 'constants/theme'
import isPropValid from '@emotion/is-prop-valid';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

import { ArticlesProvider } from 'contexts/ArticlesContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      refetchIntervalInBackground: false,
      retry: 0,
    },
  },
});

root.render(
  <React.StrictMode>
    <StyleSheetManager shouldForwardProp={isPropValid}>
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <ArticlesProvider>
            <GlobalStyles />
            <Router>
              <Routes>
                <Route path="/" element={<Home />} />
              </Routes>
            </Router>
          </ArticlesProvider>
        </QueryClientProvider>
      </ThemeProvider>
    </StyleSheetManager>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
