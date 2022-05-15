import { Fab } from '@mui/material';
import { Add } from '@mui/icons-material';

const AddButton = ({ setDialog, sx }) => (
  <Fab
    sx={{
      position: 'absolute',
      top: '90%',
      left: '50%',
      transform: 'translate(-50%,-50%)',
      ...sx,
    }}
    color='primary'
    onClick={() => setDialog(true)}
  >
    <Add />
  </Fab>
);

export default AddButton;
