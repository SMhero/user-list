import React, { FC, useCallback } from 'react';
import {
  Checkbox,
  Paper,
  Table as TableMui,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';

import { User } from 'reducers/users';

interface Props {
  selectedUsers: User[];
  onChecked: (checked: boolean, user: User) => void;
  rows: User[];
}

const Table: FC<Props> = ({
  selectedUsers,
  onChecked,
  rows,
}) => {
  const getChecked = useCallback((id: number) =>
    selectedUsers.some(user => user.id === id)
  , [selectedUsers]);

  return (
    <TableContainer component={Paper} style={{ maxHeight: '385px' }}>
      <TableMui>
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell align="right">First name</TableCell>
            <TableCell align="right">Last name</TableCell>
            <TableCell align="right">Age</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id} selected={getChecked(row.id)}>
              <TableCell size='small'>
                <Checkbox checked={getChecked(row.id)}
                  onChange={({ target }: React.ChangeEvent<HTMLInputElement>) => {
                    onChecked(target.checked, row);
                  }}
                />
              </TableCell>
              <TableCell align="right">{row.firstName}</TableCell>
              <TableCell align="right">{row.lastName}</TableCell>
              <TableCell size='small' align="right">{row.age}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </TableMui>
    </TableContainer>
  );
};

export default Table;
