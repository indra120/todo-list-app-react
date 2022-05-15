import { Link } from '@mui/material';

const TaskFilter = ({ name, setDrawer, setFilter }) => {
  return (
    <Link
      href='#'
      underline='none'
      onClick={() => {
        setFilter(name);
        setDrawer(false);
      }}
      sx={{
        color: { xs: 'primary', sm: 'inherit' },
        display: 'block',
        width: '100%',
        textAlign: 'center',
      }}
    >
      {name}
    </Link>
  );
};

export default TaskFilter;
