import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, navigate, RouteComponentProps } from "@reach/router";
import { fetchUsersListRequest } from '../../store/usersList/actions';
import { getErrorSelector, getPendingSelector, getUsersSelector } from '../../store/usersList/selectors';
import { IUser } from '../../store/usersList/types';
import './UsersList.css';

const UsersList = (props: RouteComponentProps) => {
  const dispatch = useDispatch();
  const pending = useSelector(getPendingSelector);
  const users = useSelector(getUsersSelector);
  const error = useSelector(getErrorSelector);

  useEffect(() => {
    dispatch(fetchUsersListRequest());
  }, [])
  
  return (
    <div className='users-list'>
      <h1>Users List</h1>
      {pending? (
        <div>Loading...</div>
      ): error? (
        <div>Error</div>
      ): (
        <div className='users-list-container'>
          <button className="create-user-btn" onClick={() => navigate('/create-user')}>Create User</button>
          {users && users.length > 0 && users.map((user: IUser, index: number) => 
            (
              <Link className="users-list-link" key={`user-${index}`} to={`user/${user.id}`}>
                {user.id} - {user.first_name} - {user.last_name} - {user.email}
              </Link>
            )
          )}
        </div>
      )}
    </div>
  );
}

export default UsersList;
