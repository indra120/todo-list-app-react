import { Container, List, Typography as Text } from '@mui/material';
import { TaskItem } from '.';

const TaskLists = ({ tasks, setTasks }) => {
  return (
    <Container>
      <Text variant='h5'>
        {tasks.length > 0
          ? `${tasks.length} Task${tasks.length === 1 ? '' : 's'} remaining`
          : ''}
      </Text>
      <List>
        {tasks.map(task => (
          <TaskItem
            id={task.id}
            key={task.id}
            taskName={task.taskName}
            tasks={tasks}
            setTasks={setTasks}
          />
        ))}
      </List>
    </Container>
  );
};

export default TaskLists;
