import { FC } from 'react';
import { Checkbox, FormControlLabel, Typography } from '@mui/material';

import { Root } from './styled';

interface Props {
  onCheckAll: (isChecked: boolean) => void;
}

const Header: FC<Props> = ({ onCheckAll }) => (
  <Root>
    <Typography variant='h3'>
      Users table
    </Typography>
    <FormControlLabel
      label="Select all"
      control={<Checkbox onChange={({ target }) => onCheckAll(target.checked)} />}
    />
  </Root>
);

export default Header;
