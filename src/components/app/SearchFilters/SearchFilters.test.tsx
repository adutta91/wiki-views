import { screen } from '@testing-library/react';
import SearchFilters from './index';
import { renderWithWrappers, withArticles } from 'testing-helpers/render';
import { act } from 'react-dom/test-utils';
import {within} from '@testing-library/dom'
import dayjs from 'dayjs';
import { subDays } from 'date-fns';

it('renders a functional date-picker', () => {
  renderWithWrappers(withArticles(SearchFilters));
  expect(screen.getByText(dayjs(subDays(new Date(), 1)).format('MMMM D, YYYY'))).toBeInTheDocument()
  act(() => {
    screen.getByTestId('date-picker').click()
  })
  
  expect(screen.getByTestId('dropdown-container')).toBeInTheDocument()
  
  act(() => {
    within(screen.getByTestId('dropdown-container')).getByText('10').click()
  })

  expect(screen.getByText(dayjs().date(10).format('MMMM D, YYYY'))).toBeInTheDocument()
});

it('renders a functional page-picker', () => {
  renderWithWrappers(withArticles(SearchFilters));
  expect(within(screen.getByTestId('num-per-page-picker')).getByText('25')).toBeInTheDocument()
  act(() => {
    screen.getByTestId('num-per-page-picker').click()
  })
  
  expect(screen.getByTestId('dropdown-container')).toBeInTheDocument()
  
  act(() => {
    within(screen.getByTestId('dropdown-container')).getByText('100').click()
  })

  expect(within(screen.getByTestId('num-per-page-picker')).getByText('100')).toBeInTheDocument()
});

it('renders a functional country-picker', () => {
  renderWithWrappers(withArticles(SearchFilters));
  expect(within(screen.getByTestId('country-picker')).getByText('US')).toBeInTheDocument()
  act(() => {
    screen.getByTestId('country-picker').click()
  })
  
  expect(screen.getByTestId('dropdown-container')).toBeInTheDocument()
  
  act(() => {
    within(screen.getByTestId('dropdown-container')).getByText('France').click()
  })

  expect(within(screen.getByTestId('country-picker')).getByText('FR')).toBeInTheDocument()
});
