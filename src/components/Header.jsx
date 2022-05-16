import { DesktopMenu, FilterMenu, MobileMenu } from '.';
import { createContext, useState } from 'react';
import {
  AppBar,
  Container,
  IconButton,
  Toolbar,
  Typography as Text,
} from '@mui/material';
import { Menu } from '@mui/icons-material';

export const Drawer = createContext();

const Header = () => {
  const [drawer, setDrawer] = useState(false);
  return (
    <Drawer.Provider value={{ drawer, setDrawer }}>
      <AppBar sx={style.appBar}>
        <Container>
          <Toolbar sx={style.toolbar}>
            <IconButton
              color='inherit'
              sx={style.iconButton}
              onClick={() => setDrawer(!drawer)}
            >
              <Menu />
            </IconButton>
            <Text variant='h5' sx={style.logo}>
              My Tasks
            </Text>
            <DesktopMenu>
              <FilterMenu />
            </DesktopMenu>
          </Toolbar>
        </Container>
      </AppBar>
      <Toolbar></Toolbar>
      <MobileMenu>
        <FilterMenu />
      </MobileMenu>
    </Drawer.Provider>
  );
};

const style = {
  appBar: {
    zIndex: '1400',
  },
  iconButton: {
    display: {
      sm: 'none'
    },
    position: 'absolute'
  },
  logo: {
    mx: {
      xs: 'auto',
      sm: 'unset',
    },
  },
  toolbar: {
    px: '0px !important',
    position: 'relative',
  },
};

export default Header;
