import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  useMediaQuery,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  Divider,
} from '@mui/material';
import { Theme } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const NavBar = () => {
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Toggle the drawer
  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }
    setIsDrawerOpen(open);
  };

  // Menu items
  const menuItems = [
    { text: 'Главная', path: '/' },
    { text: 'Методика', path: '/method' },
    { text: 'Начать тест', path: '/test_init', isPrimary: true },
  ];

  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
            Тест на профориентацию
          </Link>
        </Typography>

        {!isMobile ? (
          // Desktop menu
          <Box>
            {menuItems.map((item) => (
              <Button
                key={item.text}
                color={item.isPrimary ? 'secondary' : 'inherit'}
                variant={item.isPrimary ? 'contained' : 'text'}
              >
                <Link
                  to={item.path}
                  style={{ color: 'inherit', textDecoration: 'none' }}
                >
                  {item.text}
                </Link>
              </Button>
            ))}
          </Box>
        ) : (
          // Mobile menu with hamburger icon
          <>
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="right"
              open={isDrawerOpen}
              onClose={toggleDrawer(false)}
              PaperProps={{
                sx: {
                  borderTopLeftRadius: 8, // Rounded top-left corner
                  borderBottomLeftRadius: 8, // Rounded bottom-left corner
                },
              }}
            >
              <Box
                sx={{ width: 250 }}
                role="presentation"
                onKeyDown={toggleDrawer(false)}
              >
                {/* Close button */}
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    p: 2,
                    width: '100%',
                  }}
                >
                  <Typography align="left" fontWeight="bold" variant="h5">
                    Меню
                  </Typography>
                  <IconButton onClick={toggleDrawer(false)}>
                    <CloseIcon />
                  </IconButton>
                </Box>
                <Divider />
                <List>
                  {menuItems.map((item) => (
                    <ListItem
                      key={item.text}
                      disablePadding
                    >
                      <ListItemButton
                        component={Link}
                        to={item.path}
                        sx={{
                          color: 'grey !important', // Force grey text
                          '&:visited': {
                            color: 'grey !important', // Force grey text for visited links
                          },
                        }}
                        onClick={toggleDrawer(false)}
                      >
                        <ListItemText
                          primary={
                            <Typography fontWeight="bold"> {/* Make text bold */}
                              {item.text}
                            </Typography>
                          }
                        />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Drawer>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;