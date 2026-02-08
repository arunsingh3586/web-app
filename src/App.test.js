import { render, screen } from '@testing-library/react';
import App from './App';
jest.mock('axios', () => ({
  get: jest.fn(() => Promise.resolve({ data: [] }))
}));
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
