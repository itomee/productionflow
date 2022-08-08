import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/CHANGE/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders CHANGE', () => {
  render(<App />);
  const linkElement = screen.getByText(/CHANGE/i);
  expect(linkElement).toBeInTheDocument();
});
