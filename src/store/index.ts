import { configureStore } from '@reduxjs/toolkit';

import users from 'reducers/users';

const store = configureStore({
  reducer: {
    users,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
