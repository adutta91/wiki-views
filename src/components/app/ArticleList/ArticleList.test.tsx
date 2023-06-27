import { screen } from '@testing-library/react';
import ArticleList from './index';
import { renderWithWrappers, withPagination } from 'testing-helpers/render';

it('renders a list', () => {
  renderWithWrappers(withPagination(ArticleList));
  expect(screen.queryAllByTestId('list-item').length).toBe(10);
});

it('renders a list based on pagination options', () => {
  renderWithWrappers(withPagination(ArticleList, { numPerPage: 15 }));
  expect(screen.queryAllByTestId('list-item').length).toBe(15);
});