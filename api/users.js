import { createAsyncThunk } from '@reduxjs/toolkit';
const parseUser = (data) => {
    if ('name' in data) {
        const [firstName, lastName] = data.name.split(' ');
        return {
            age: Math.floor(Math.random() * 100),
            firstName,
            id: data.id,
            lastName,
        };
    }
    throw new Error(`Expected UserApi structure, but got ${JSON.stringify(data, null, 2)}`);
};
export const loadUsers = createAsyncThunk('users/loadUsers', async (_, { rejectWithValue }) => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
            throw new Error('Server error!');
        }
        const json = await response.json();
        if (!('length' in json)) {
            throw new Error(`Expected array, but got ${JSON.stringify(json, null, 2)}`);
        }
        return json.map(parseUser);
    }
    catch (error) {
        return rejectWithValue(error);
    }
});
//# sourceMappingURL=users.js.map