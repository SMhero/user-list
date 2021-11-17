import { createSlice } from '@reduxjs/toolkit';
import { loadUsers } from 'api/users';
const initialState = {
    data: [],
    error: null,
    selected: null,
    status: null,
};
const usersSlice = createSlice({
    extraReducers: ({ addCase }) => {
        addCase(loadUsers.pending, (state) => {
            state.status = 'pending';
            state.error = null;
        }),
            addCase(loadUsers.fulfilled, (state, action) => {
                state.status = 'fulfilled';
                state.data = [...action.payload];
            }),
            addCase(loadUsers.rejected, (state, action) => {
                state.error = action.payload;
                state.status = 'rejected';
            });
    },
    initialState,
    name: 'users',
    reducers: {
        setSelected(state, action) {
            state.selected = [...action.payload];
        },
    },
});
export const { setSelected } = usersSlice.actions;
export default usersSlice.reducer;
//# sourceMappingURL=users.js.map