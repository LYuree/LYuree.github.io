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
    h1: {
      fontSize: '1.2rem', // Base font size for h3
      '@media (min-width:600px)': {
        fontSize: '1.5rem', // Font size for screens wider than 600px
      },
      [createTheme().breakpoints.up('md')]: {
        fontSize: '2.4rem', // Font size for screens wider than 900px (md breakpoint)
      },
    },
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