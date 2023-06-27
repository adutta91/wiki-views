import { screen } from '@testing-library/react';
import Pagination from './index';
import { renderWithWrappers, withPagination } from 'testing-helpers/render';
import { act } from 'react-dom/test-utils';

it('renders functional pagination', () => {
  renderWithWrappers(withPagination(Pagination));
  expect(screen.getByTestId('pagination')).toBeInTheDocument()
  expect(screen.getByTestId('prev-button')).toHaveAttribute('disabled')
  expect(screen.getByTestId('page-button-0-active')).toBeInTheDocument()
  
  act(() => {
    screen.getByTestId('page-button-1-inactive').click()
  })

  expect(screen.getByTestId('page-button-0-inactive')).toBeInTheDocument()
  expect(screen.getByTestId('page-button-1-active')).toBeInTheDocument()
});
