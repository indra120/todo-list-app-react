import { Container, List, Typography as Text } from '@mui/material';
import { TaskItem } from '.';

const TaskLists = ({ tasks }) => {
  return (
    <Container>
      <Text variant='h5'>
        {tasks.length > 0 ? `${tasks.length} Tasks remaining` : ''}
      </Text>
      <List>
        {tasks.map(task => (
          <TaskItem key={task.id} taskName={task.taskName} />
        ))}
      </List>
    </Container>
  );
};

export default TaskLists;
