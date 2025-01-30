import { AppBar, Toolbar, Typography, Button, Box, useMediaQuery } from '@mui/material';
import { Theme } from '@mui/material/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { theme } from '../../theme';


const NavBar = () => {
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));

  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Профориентация
        </Typography>
        
        {!isMobile && (
          <Box>
            <Button color="inherit" href="/">Главная</Button>
            <Button color="inherit" href="/metod">Методика</Button>
            <Button color="secondary" href="/test" variant="contained">
              Начать тест
            </Button>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

// const NavBar = () => {
//     return (
//         <nav>
//             <ul>
//                 <li>nav1</li>
//                 <li>nav2</li>
//                 <li>nav3</li>
//             </ul>
//         </nav>
//     )
// }
 
export default NavBar;