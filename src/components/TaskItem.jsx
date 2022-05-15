import { useState } from 'react';
import {
  Box,
  Button,
  Card,
  ListItem,
  ListItemText,
} from '@mui/material';
import { EditOutlined, DeleteOutlined } from '@mui/icons-material';
import EditTaskForm from './EditTaskForm';

const TaskItem = ({ id, taskName, tasks, setTasks, Mark }) => {
  const [dialog, setDialog] = useState(false);
  
  const markAsCompleted = () => {
    setTasks(
      tasks.map(task => {
        if (id === task.id)
          return {
            ...task,
            isCompleted: !task.isCompleted,
          };
        return task;
      })
    );
  };

  return (
    <ListItem sx={style.listItem}>
      <Card sx={style.card}>
        <Box sx={style.leftBox}>
          <Mark onClick={markAsCompleted} />
          <ListItemText primary={taskName} />
        </Box>

        <Box sx={style.rightBox}>
          <Button onClick={() => setDialog(true)}>
            <EditOutlined />
          </Button>
          <Button
            onClick={() => setTasks(tasks.filter(task => id !== task.id))}
          >
            <DeleteOutlined />
          </Button>
        </Box>

        <EditTaskForm
          dialog={dialog}
          id={id}
          tasks={tasks}
          setTasks={setTasks}
          setDialog={setDialog}
        />
      </Card>
    </ListItem>
  );
};

const style = {
  listItem: {
    px: '0px',
  },
  card: {
    width: '100%',
    display: 'flex',
    p: '10px',
    boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
  },
  leftBox: {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    gap: '10px',
  },
  rightBox: {
    display: 'flex',
    button: { minWidth: '24px' },
  },
};

export default TaskItem;
