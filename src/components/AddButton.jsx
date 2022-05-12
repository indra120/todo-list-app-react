import { Fab } from '@mui/material';
import { Add } from '@mui/icons-material';

const AddButton = ({ setDialog }) => (
  <Fab
    sx={{
      position: 'absolute',
      top: '90%',
      left: '50%',
      transform: 'translate(-50%,-50%)',
    }}
    color='primary'
    onClick={() => setDialog(true)}
  >
    <Add />
  </Fab>
);

export default AddButton;
