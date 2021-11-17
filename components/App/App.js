import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useCallback, useEffect, useState } from 'react';
import { CircularProgress, createTheme, ThemeProvider, } from '@mui/material';
import { GlobalStyle, Root, Content, BreadcrumbsWrapper, BreadcrumbsItem, } from './styled';
import { loadUsers } from 'api/users';
import { useTypedDispatch, useTypedSelector } from 'hooks/useTypedDispatch';
import Header from 'components/Header/Header';
import Table from 'components/Table/Table';
import { setSelected } from 'reducers/users';
const theme = createTheme({
    palette: {
        mode: 'light',
    },
});
const App = () => {
    const [selectedUsers, setselectedUsers] = useState([]);
    const dispatch = useTypedDispatch();
    const { data: users, status } = useTypedSelector(state => state.users);
    const onChecked = useCallback((checked, user) => {
        if (checked) {
            setselectedUsers((prevState) => [...prevState, user]);
        }
        else {
            setselectedUsers((prevState) => prevState.filter(({ id }) => id !== user.id));
        }
    }, []);
    const onCheckAll = useCallback((isChecked) => {
        setselectedUsers(isChecked ? users : []);
    }, [users]);
    useEffect(() => {
        dispatch(loadUsers());
    }, [dispatch]);
    useEffect(() => {
        dispatch(setSelected(selectedUsers));
    }, [dispatch, selectedUsers]);
    return (_jsxs(ThemeProvider, Object.assign({ theme: theme }, { children: [_jsx(GlobalStyle, {}, void 0), _jsx(Root, Object.assign({ isLoading: status === 'pending' }, { children: !users.length ? (_jsx(CircularProgress, {}, void 0)) : (_jsxs(Content, { children: [_jsx(Header, { onCheckAll: onCheckAll }, void 0), _jsx(Table, { selectedUsers: selectedUsers, onChecked: onChecked, rows: users }, void 0), _jsx(BreadcrumbsWrapper, Object.assign({ maxItems: 5 }, { children: selectedUsers.map(({ id, firstName, lastName }) => (_jsxs(BreadcrumbsItem, { children: [firstName, " ", lastName] }, id))) }), void 0)] }, void 0)) }), void 0)] }), void 0));
};
export default App;
//# sourceMappingURL=App.js.map