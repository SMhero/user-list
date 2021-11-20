import { FC, useCallback, useEffect, useState } from 'react';
import {
  CircularProgress,
  createTheme,
  ThemeProvider,
} from '@mui/material';

import {
  GlobalStyle, Root, Content, BreadcrumbsWrapper, BreadcrumbsItem,
} from './styled';

import { loadUsers } from 'api/users';
import { useTypedDispatch, useTypedSelector } from 'hooks/useTypedDispatch';
import Header from 'components/Header/Header';
import Table from 'components/Table/Table';
import { User, setSelected } from 'reducers/users';

const theme = createTheme({
  palette: {
    mode: 'light',
  },
});

const App: FC = () => {
  const [selectedUsers, setselectedUsers] = useState<User[]>([]);
  const dispatch = useTypedDispatch();
  const { data: users, status } = useTypedSelector(state => state.users);

  const onChecked = useCallback((
    checked: boolean, user: User,
  ) => {
    if (checked) {
      setselectedUsers((prevState) => [...prevState, user]);
    } else {
      setselectedUsers((prevState) =>
        prevState.filter(({ id }) => id !== user.id),
      );
    }
  }, []);

  const onCheckAll = useCallback((isChecked: boolean) => {
    setselectedUsers(isChecked ? users : []);
  }, [users]);

  useEffect(() => {
    dispatch(loadUsers());
  }, []);

  useEffect(() => {
    dispatch(setSelected(selectedUsers));
  }, [selectedUsers]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Root isLoading={status === 'pending'}>
        {!users.length ? (
          <CircularProgress />
        ) : (
          <Content>
            <Header onCheckAll={onCheckAll} />
            <Table
              selectedUsers={selectedUsers}
              onChecked={onChecked}
              rows={users}
            />
            <BreadcrumbsWrapper maxItems={5}>
              {selectedUsers.map(({ id, firstName, lastName }) => (
                <BreadcrumbsItem key={id}>
                  {firstName} {lastName}
                </BreadcrumbsItem>
              ))}
            </BreadcrumbsWrapper>
          </Content>
        )}
      </Root>
    </ThemeProvider>
  );
};

export default App;
