import { State } from '../App';
import { useContext } from 'react';
import { TaskFilter } from '.';
import { ListItem } from '@mui/material';

const FilterMenu = () => {
  const { filterNames } = useContext(State);
  return filterNames.map(filter => (
    <ListItem key={filter}>
      <TaskFilter filter={filter} />
    </ListItem>
  ));
};

export default FilterMenu;
