import { screen } from '@testing-library/react';
import Navbar from './index';
import { renderWithWrappers } from 'testing-helpers/render';

it('renders', () => {
  renderWithWrappers(Navbar);
  expect(screen.getByTestId('navbar')).toBeInTheDocument();
});