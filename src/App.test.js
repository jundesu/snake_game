import { render, screen } from '@testing-library/react';
import App from './App';

test('renders start game', () => {
  render(<App />);
  const linkElement = screen.getByText(/start game/i);
  expect(linkElement).toBeInTheDocument();
});


