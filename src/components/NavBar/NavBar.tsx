import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  useMediaQuery,
} from "@mui/material";
import { Theme } from "@mui/material/styles";
import { Link } from "react-router-dom";

const NavBar = () => {
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );

  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Профориентация
        </Typography>

        {!isMobile && (
          <Box>
            <Button color="inherit">
              <Link to="/">Главная</Link>
            </Button>
            <Button color="inherit">
              <Link to="/method">Методика</Link>
            </Button>
            <Button color="secondary" variant="contained">
              <Link to="/test">Начать тест</Link>
            </Button>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
