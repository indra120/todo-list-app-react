import { Drawer } from './Header';
import { State } from '../App';
import { useContext } from 'react';
import { Link } from '@mui/material';

const TaskFilter = ({ filter }) => {
  const { setFilter } = useContext(State);
  const { setDrawer } = useContext(Drawer);

  return (
    <Link
      href='#'
      underline='none'
      onClick={() => {
        setFilter(filter);
        setDrawer(false);
      }}
      sx={style}
    >
      {filter}
    </Link>
  );
};

const style = {
  color: {
    xs: 'primary',
    sm: 'inherit'
  },
  display: 'block',
  width: '100%',
  textAlign: 'center',
};
export default TaskFilter;
