import { State } from '../App';
import { useContext } from 'react';
import { Fab } from '@mui/material';
import { Add } from '@mui/icons-material';

const AddButton = ({ sx }) => {
  const { setDialog } = useContext(State);
  return (
    <Fab
      sx={{ ...style, ...sx }}
      color='primary'
      onClick={() => setDialog(true)}
    >
      <Add />
    </Fab>
  );
};

const style = {
  position: 'absolute',
  top: '90%',
  left: '50%',
  transform: 'translate(-50%,-50%)',
};

export default AddButton;
