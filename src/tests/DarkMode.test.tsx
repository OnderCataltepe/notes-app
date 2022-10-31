import { screen } from '@testing-library/react';
import { renderWithProviders } from './utils/renderConnected';
import DarkMode from '../components/header/darkMode/DarkMode';
import userEvent from '@testing-library/user-event';

test('DarkMode icon changes', async () => {
  renderWithProviders(<DarkMode />);
  const iconButton = screen.getByLabelText('change mode');
  await userEvent.click(iconButton);
  expect(screen.getByTestId('LightModeOutlinedIcon')).toBeInTheDocument();
  await userEvent.click(iconButton);
  expect(screen.getByTestId('ModeNightIcon')).toBeInTheDocument();
});
