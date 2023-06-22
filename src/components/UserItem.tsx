import React, {FC, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import {fetchUsers} from "../store/reducers/ActionCreators";

const UserItem: FC = () => {
  const dispatch = useAppDispatch();
  const {
    users,
    isLoading,
    error
  } = useAppSelector(state => state.userReducer);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div className="App">
      <h2>Список пользователей:</h2>
      {isLoading && <h3>Идёт загрузка...</h3>}
      {error && <h3>{error}</h3>}
      {(users.length)
        ? users.map(user => {
          return (<div key={user.id}>{user.name}</div>);
        })
        : ""}
    </div>
  );
};

export default UserItem;
