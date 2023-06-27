import { screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import ListItem from './index';
import { renderWithWrappers } from 'testing-helpers/render';
import { mockArticles } from 'testing-helpers/mockData';
import sanitizeTitle from 'helpers/sanitizeTitle';

it('renders with basic info', () => {
  renderWithWrappers(() => <ListItem article={mockArticles[0]} />);
  expect(screen.getByTestId('list-item')).toBeInTheDocument();
  expect(screen.getByText(`${mockArticles[0].views_ceil.toLocaleString()} views`)).toBeInTheDocument();
  expect(screen.getByText(sanitizeTitle(mockArticles[0].article))).toBeInTheDocument();
  expect(screen.getByText(mockArticles[0].rank)).toBeInTheDocument();
});


it('renders details', () => {
  renderWithWrappers(() => <ListItem article={mockArticles[0]} />);
  act(() => {
    screen.getByTestId('list-item').click()
  })
  expect(screen.getByText("Top views this month")).toBeInTheDocument();
})