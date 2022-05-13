import { useState } from 'react';
import { nanoid } from 'nanoid';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from '@mui/material';

const NewTaskForm = ({ dialog, setDialog, tasks, setTasks }) => {
  const [taskName, setTaskName] = useState('');
  const closeDialog = () => setDialog(false);

  const submit = () => {
    if (taskName === '') {
      alert('This field is required');
    } else {
      setTasks([
        ...tasks,
        {
          id: `task-${nanoid()}`,
          taskName,
          completed: false,
        },
      ]);
      closeDialog();
      setTaskName('');
    }
  };

  return (
    <Dialog open={dialog} onClose={closeDialog}>
      <DialogTitle>What needs to be done?</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin='dense'
          id='taskName'
          label='Task name'
          type='text'
          fullWidth
          variant='standard'
          value={taskName}
          onChange={e => setTaskName(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={closeDialog}>Cancel</Button>
        <Button onClick={submit}>Add</Button>
      </DialogActions>
    </Dialog>
  );
};

export default NewTaskForm;
