import { DesktopMenu, MobileMenu, TaskFilter } from '.';
import { useState } from 'react';
import {
  AppBar,
  Container,
  IconButton,
  ListItem,
  Toolbar,
  Typography as Text,
} from '@mui/material';
import { Menu } from '@mui/icons-material';

const Header = ({ filters, setFilter }) => {
  const [drawer, setDrawer] = useState(false);

  const filterList = filters.map(filter => (
    <ListItem key={filter}>
      <TaskFilter name={filter} setDrawer={setDrawer} setFilter={setFilter} />
    </ListItem>
  ));

  return (
    <>
      <AppBar sx={{ zIndex: '1400' }}>
        <Container>
          <Toolbar sx={{ px: '0px !important', position: 'relative' }}>
            <IconButton
              color='inherit'
              sx={{ display: { sm: 'none' }, position: 'absolute' }}
              onClick={() => setDrawer(!drawer)}
            >
              <Menu />
            </IconButton>
            <Text variant='h5' sx={{ mx: { xs: 'auto', sm: 'unset' } }}>
              My Tasks
            </Text>
            <DesktopMenu filters={filters} setFilter={setFilter} />
          </Toolbar>
        </Container>
      </AppBar>
      <Toolbar></Toolbar>
      <MobileMenu drawer={drawer} setDrawer={setDrawer}>
        {filterList}
      </MobileMenu>
    </>
  );
};

export default Header;
