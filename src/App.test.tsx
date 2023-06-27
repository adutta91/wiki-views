import { render, screen } from '@testing-library/react';
import App from './App';

it('renders', () => {
  render(<App />);
  expect(screen.getByText('Top Wikipedia articles')).toBeInTheDocument();
});