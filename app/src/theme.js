import { createTheme } from '@mui/material/styles';
import { green, purple } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: purple[300],
    },
    secondary: {
      main: green[100],
    },
  },
});

export {theme}

