import { Button } from '@mui/material';
import { Replay } from '@mui/icons-material';

const RepeatButton = ({ ...props }) => (
  <Button sx={style} {...props}>
    <Replay />
  </Button>
);

const style = {
  minWidth: '42px',
  minHeight: '42px'
};

export default RepeatButton;
