import { screen } from '@testing-library/react';
import List from './index';
import { renderWithWrappers } from 'testing-helpers/render';
import { mockArticles } from 'testing-helpers/mockData';

it('renders a list', () => {
  renderWithWrappers(() => <List items={mockArticles} />);
  expect(screen.queryAllByTestId('list-item').length).toBe(mockArticles.length);
});
