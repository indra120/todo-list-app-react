import {
  Box,
  Button,
  Card,
  Checkbox,
  ListItem,
  ListItemText,
} from '@mui/material';
import { EditOutlined, DeleteOutlined } from '@mui/icons-material';

const TaskItem = ({ id, taskName, tasks, setTasks }) => {
  return (
    <ListItem sx={style.listItem}>
      <Card sx={style.card}>
        <Box sx={style.leftBox}>
          <Checkbox
            onChange={() => {
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
              console.log(tasks);
            }}
          />
          <ListItemText primary={taskName} />
        </Box>
        <Box sx={style.rightBox}>
          <Button onClick={() => {}}>
            <EditOutlined />
          </Button>
          <Button onClick={() => {}}>
            <DeleteOutlined />
          </Button>
        </Box>
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
