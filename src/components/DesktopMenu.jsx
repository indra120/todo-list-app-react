import { TaskFilter } from '.';
import { List, ListItem } from '@mui/material';

const DesktopMenu = ({ filters, setFilter }) => (
  <List sx={{ display: { xs: 'none', sm: 'flex' }, ml: 'auto' }}>
    {filters.map(filter => (
      <ListItem key={filter}>
        <TaskFilter name={filter} setFilter={setFilter} />
      </ListItem>
    ))}
  </List>
);

export default DesktopMenu;
