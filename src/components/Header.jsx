import { TaskFilter } from '.';
import {
  AppBar,
  Container,
  List,
  ListItem,
  Toolbar,
  Typography as Text,
} from '@mui/material';

const Header = ({ filters, setFilter }) => (
  <>
    <AppBar>
      <Container>
        <Toolbar sx={{ px: '0px !important' }}>
          <Text variant='h5'>My Tasks</Text>
          <List sx={{ display: 'flex', ml: 'auto' }}>
            {filters.map(filter => (
              <ListItem key={filter}>
                <TaskFilter name={filter} setFilter={setFilter} />
              </ListItem>
            ))}
          </List>
        </Toolbar>
      </Container>
    </AppBar>
    <Toolbar></Toolbar>
  </>
);

export default Header;
