import { useState } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from '@mui/material';

const EditTaskForm = ({ dialog, id, setDialog, tasks, setTasks }) => {
  const [newTaskName, setNewTaskName] = useState('');
  const closeDialog = () => setDialog(false);

  const submit = () => {
    if (newTaskName === '') {
      alert('This field is required');
    } else {
      setTasks(
        tasks.map(task => {
          if (id === task.id) return { ...task, taskName: newTaskName };
          return task;
        })
      );
      closeDialog();
      setNewTaskName('');
    }
  };

  return (
    <Dialog open={dialog} onClose={closeDialog}>
      <DialogTitle>Change task name</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin='dense'
          id='newTaskName'
          label='New Task name'
          type='text'
          fullWidth
          variant='standard'
          value={newTaskName}
          onChange={e => setNewTaskName(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={closeDialog}>Cancel</Button>
        <Button onClick={submit}>Save</Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditTaskForm;
