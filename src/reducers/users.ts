import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { loadUsers } from 'api/users';

export interface User {
  id: number;
  firstName: string
  lastName: string;
  age: number;
}

interface UsersState {
  data: User[];
  error: string | null;
  selected: User[] | null;
  status: 'pending' | 'fulfilled' | 'rejected' | null;
}

const initialState: UsersState = {
  data: [],
  error: null,
  selected: null,
  status: null,
};

const usersSlice = createSlice({
  extraReducers: ({ addCase }) => {
    addCase(loadUsers.pending, (state: UsersState) => {
      state.status = 'pending';
      state.error = null;
    }),
    addCase(loadUsers.fulfilled, (state: UsersState, action: PayloadAction<User[]>) => {
      state.status = 'fulfilled';
      state.data = [...action.payload];
    }),
    addCase(loadUsers.rejected, (
      state: UsersState,
      action,
    ) => {
      state.error = action.payload as string;
      state.status = 'rejected';
    });
  },
  initialState,
  name: 'users',
  reducers: {
    setSelected(state, action: PayloadAction<User[]>) {
      state.selected = [...action.payload];
    },
  },
});

export const { setSelected } = usersSlice.actions;

export default usersSlice.reducer;
