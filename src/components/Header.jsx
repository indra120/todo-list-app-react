import { AppBar, Toolbar, Typography as Text } from '@mui/material';

const Header = () => (
  <header>
    <AppBar>
      <Toolbar>
        <Text variant='h5'>My Tasks</Text>
      </Toolbar>
    </AppBar>
    <Toolbar></Toolbar>
  </header>
);

export default Header;
