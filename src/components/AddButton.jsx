import { Fab } from '@mui/material';
import { Add } from '@mui/icons-material';

const AddButton = () => (
  <Fab
    sx={{
      position: 'absolute',
      top: '90%',
      left: '50%',
      transform: 'translate(-50%,-50%)',
    }}
    color='primary'
    onClick={() => {}}
  >
    <Add />
  </Fab>
);

export default AddButton;
