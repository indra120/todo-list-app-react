import { Drawer } from './Header';
import { useContext } from 'react';
import { List, SwipeableDrawer } from '@mui/material';

const MobileMenu = ({ children }) => {
  const { drawer, setDrawer } = useContext(Drawer);
  return (
    <SwipeableDrawer
      anchor='top'
      open={drawer}
      onClose={() => setDrawer(false)}
      onOpen={() => {}}
    >
      <List sx={style}>{children}</List>
    </SwipeableDrawer>
  );
};

const style = {
  display: {
    sm: 'none'
  },
  mt: '56px'
};

export default MobileMenu;
