import { Checkbox, Container, List, Typography as Text } from '@mui/material';
import { RepeatButton,TaskItem } from '.';

const TaskLists = ({ Filter, filterList, tasks, setTasks }) => {
  const taskList = tasks
    .filter(filterList[Filter])
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
  return (
    <Container>
      <Text variant='h5'>
        {taskList.length === 0
          ? ''
          : `${taskList.length} ${
              taskList.length !== 1 ? 'tasks' : 'task'
            } remaining`}
      </Text>
      <List>{taskList}</List>
    </Container>
  );
};

export default TaskLists;
