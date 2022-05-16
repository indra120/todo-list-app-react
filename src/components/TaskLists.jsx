import { State } from '../App';
import { useContext } from 'react';
import { Checkbox, Container, List, Typography as Text } from '@mui/material';
import { RepeatButton, TaskItem } from '.';

const TaskLists = ({ filter, filterList }) => {
  const { tasks, setTasks } = useContext(State);

  const taskList = tasks
    .filter(filterList[filter])
    .map(task => (
      <TaskItem
        id={task.id}
        key={task.id}
        taskName={task.taskName}
        tasks={tasks}
        setTasks={setTasks}
        Mark={task.isCompleted ? RepeatButton : Checkbox}
      />
    ));

  const headingText =
    taskList.length === 0
      ? ''
      : `${taskList.length} ${
          taskList.length !== 1 ? 'tasks' : 'task'
        } remaining`;

  return (
    <Container>
      <Text variant='h5'>{headingText}</Text>
      <List>{taskList}</List>
    </Container>
  );
};

export default TaskLists;
