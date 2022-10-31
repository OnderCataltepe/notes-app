import { screen } from '@testing-library/react';
import { renderWithProviders } from './utils/renderConnected';
import userEvent from '@testing-library/user-event';
import App from '../App';

test('DarkMode icon changes', async () => {
  renderWithProviders(<App />);
  const addButton = screen.getByTestId('add-button');
  await userEvent.click(addButton);
  const textFooter = screen.getByText(/Created/i);
  expect(textFooter).toBeInTheDocument();
});
