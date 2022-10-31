import Box from '@mui/material/Box';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import IconButton from '@mui/material/IconButton';
import { themeToggle } from '../../../store/reducers/themeSlice';
import { useAppDispatch, useAppSelector } from '../../../store/hooks/reduxHooks';
const DarkMode = (): JSX.Element => {
  const dark = useAppSelector((state) => state.theme.dark);
  const dispatch = useAppDispatch();

  const changeTheme = (): void => {
    localStorage.setItem('theme', JSON.stringify(!dark));
    dispatch(themeToggle());
  };
  return (
    <Box sx={{ p: 2, textAlign: 'right' }}>
      <IconButton onClick={changeTheme} size="large" aria-label="change mode">
        {!dark ? (
          <ModeNightIcon sx={{ color: '#001E3C' }} fontSize="inherit" />
        ) : (
          <LightModeOutlinedIcon sx={{ color: 'yellow' }} fontSize="inherit" />
        )}
      </IconButton>
    </Box>
  );
};

export default DarkMode;
