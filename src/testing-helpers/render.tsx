/* eslint-disable @typescript-eslint/no-explicit-any */
import { render } from '@testing-library/react';

import { PaginationProvider } from 'contexts/PaginationContext';
import { mockArticles } from 'testing-helpers/mockData';
import React from 'react';
import { ThemeProvider, StyleSheetManager } from 'styled-components';
import theme from 'constants/theme'
import isPropValid from '@emotion/is-prop-valid';
import { ArticlesProvider } from 'contexts/ArticlesContext';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

export const renderWithWrappers = (Component: React.FC) => render(
  <LocalizationProvider dateAdapter={AdapterDayjs}>
    <StyleSheetManager shouldForwardProp={isPropValid}>
      <ThemeProvider theme={theme}>
        <Component />
      </ThemeProvider>
    </StyleSheetManager>
  </LocalizationProvider>
)

export const withPagination = (Component: React.FC, options?: { list?: any[], numPerPage?: number }) => {
  const defaultOptions = {
    list: mockArticles,
    numPerPage: 10
  }

  const { list, numPerPage } = { ...defaultOptions, ...(options || {}) }

  const Wrapped = () => (
    <PaginationProvider list={list} numPerPage={numPerPage}>
      <Component />
    </PaginationProvider>
  )

  return Wrapped
}

export const withArticles = (Component: React.FC) => {
  const Wrapped = () => (
    <ArticlesProvider>
      <Component />
    </ArticlesProvider>
  )

  return Wrapped
}