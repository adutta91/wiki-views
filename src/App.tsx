import React from 'react';
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

import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

import { ArticlesProvider } from 'contexts/ArticlesContext';

const App = () => (
  <React.StrictMode>
    <StyleSheetManager shouldForwardProp={isPropValid}>
      <ThemeProvider theme={theme}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <ArticlesProvider>
            <GlobalStyles />
            <Router>
              <Routes>
                <Route path="/" element={<Home />} />
              </Routes>
            </Router>
          </ArticlesProvider>
        </LocalizationProvider>
      </ThemeProvider>
    </StyleSheetManager>
  </React.StrictMode>
)

export default App