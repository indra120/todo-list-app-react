import { Button } from '@mui/material';
import { Replay } from '@mui/icons-material';

const RepeatButton = ({ ...props }) => (
  <Button sx={{ minWidth: '42px', minHeight: '42px' }} {...props}>
    <Replay />
  </Button>
);

export default RepeatButton;
