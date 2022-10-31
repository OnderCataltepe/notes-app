import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useAppSelector } from '../store/hooks/reduxHooks';

const breakpoints = {
  values: {
    xs: 0,
    sm: 575,
    md: 900,
    lg: 1200,
    xl: 1536
  }
};
const baseTheme = createTheme({
  ...breakpoints,
  typography: {
    h1: {
      fontFamily: 'revert-layer',
      fontSize: 36,
      [`@media screen and (max-width: ${breakpoints.values.md}px)`]: {
        fontSize: 24
      }
    },
    body1: {
      fontSize: 16,
      fontFamily: 'serif',
      letterSpacing: 1
    },
    body2: {
      fontSize: 12
    }
  },
  components: {
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: 8,
          '&:last-child': {
            paddingBottom: 8
          }
        }
      }
    },
    MuiCardHeader: {
      styleOverrides: {
        root: {
          padding: 4
        }
      }
    }
  }
});

const darkTheme = createTheme({
  ...baseTheme,
  palette: {
    common: {
      bg1: '#001E3C',
      bg2: '#173A5E',
      bg3: '#3949AB',
      bg4: '#1f4a75',
      bg5: '#1A2027',
      text: '#F3F6F9',
      lightGreen: '#64DD17',
      red: '#F44336'
    }
  }
});

const lightTheme = createTheme({
  ...baseTheme,
  palette: {
    common: {
      bg1: '#E8F4FF',
      bg2: '#E7EBF0',
      bg3: '#fff',
      bg4: '#fff',
      bg5: '#fff',
      text: '#0A1929',
      lightGreen: '#64DD17',
      red: '#F44336'
    }
  }
});

type ThemeProps = {
  children: JSX.Element;
};
const Theme = ({ children }: ThemeProps) => {
  const theme = useAppSelector((state) => state.theme.dark);
  return <ThemeProvider theme={theme ? darkTheme : lightTheme}>{children}</ThemeProvider>;
};

export default Theme;
