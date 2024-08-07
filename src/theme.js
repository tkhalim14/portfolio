import colors from './Components/Constants/colorscheme';
import { createTheme } from '@mui/material/styles';

const customDarkTheme  = () => ({
  palette: {
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 1000,
        lg: 1200,
        xl: 1536,
      },
    },
    primary: {
      main: colors[1],
    },
    secondary: {
      main: colors[2],
    },
    background: {
      default: colors[2],
      paper: colors[1],
    },
    text: {
      primary: colors[2],
      secondary: colors[2],
    },
  },
});

export const customTheme = createTheme(customDarkTheme());
