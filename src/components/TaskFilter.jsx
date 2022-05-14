import { Link } from '@mui/material';

const TaskFilter = ({ name, setFilter }) => {
  return (
    <Link
      href='#'
      color='inherit'
      underline='none'
      onClick={() => setFilter(name)}
    >
      {name}
    </Link>
  );
};

export default TaskFilter;
