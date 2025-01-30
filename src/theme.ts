import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Основной синий цвет
    },
    secondary: {
      main: '#ff4081', // Акцентный цвет
    },
  },
  typography: {
    fontFamily: '"Montserrat", sans-serif',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#f5f5f5',
        },
      },
    },
  },
});