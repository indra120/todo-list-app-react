import { List } from '@mui/material';

const DesktopMenu = ({ children }) => <List sx={style}>{children}</List>;

const style = {
  display: {
    xs: 'none',
    sm: 'flex'
  },
  ml: 'auto'
};

export default DesktopMenu;
