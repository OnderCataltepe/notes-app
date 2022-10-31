import { screen } from '@testing-library/react';
import { renderWithProviders } from './tests/utils/renderConnected';
import App from './App';
test('renders learn react link', () => {
  renderWithProviders(<App />);
  const linkElement = screen.getByText(/Notes App/i);
  expect(linkElement).toBeInTheDocument();
});
