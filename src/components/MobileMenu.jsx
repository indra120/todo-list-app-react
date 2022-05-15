import { List, SwipeableDrawer } from '@mui/material';

const MobileMenu = ({ children, drawer, setDrawer }) => {
  return (
    <SwipeableDrawer
      anchor='top'
      open={drawer}
      onClose={() => setDrawer(false)}
      onOpen={() => {}}
    >
      <List sx={{ display: { sm: 'none' }, mt: '56px' }}>{children}</List>
    </SwipeableDrawer>
  );
};

export default MobileMenu;
