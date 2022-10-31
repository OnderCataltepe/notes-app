import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import AddButton from './addButton/AddButton';
import DarkMode from './darkMode/DarkMode';
import { useTheme } from '@mui/material/styles';

const Header = (): JSX.Element => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        pb: 2,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: `${theme.palette.common.bg1}`,
        '>div, h1': { flex: 1 }
      }}
      data-testid="header-container">
      <AddButton />
      <Typography
        variant="h1"
        sx={{
          color: `${theme.palette.common.text}`,
          display: 'block',
          textAlign: 'center'
        }}
        gutterBottom>
        Notes App
      </Typography>
      <DarkMode />
    </Box>
  );
};

export default Header;
