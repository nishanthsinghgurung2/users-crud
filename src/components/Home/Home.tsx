import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, RouteComponentProps } from "@reach/router";
import { fetchUserRequest } from '../../store/usersList/actions';
import { getErrorSelector, getPendingSelector, getUsersSelector } from '../../store/usersList/selectors';
import { IUser } from '../../store/usersList/types';
import './Home.css';

const Home = (props: RouteComponentProps) => {
  const dispatch = useDispatch();
  const pending = useSelector(getPendingSelector);
  const users = useSelector(getUsersSelector);
  const error = useSelector(getErrorSelector);

  useEffect(() => {
    dispatch(fetchUserRequest());
  }, [])
  
  return (
    <div>
      {pending? (
        <div>Loading...</div>
      ): error? (
        <div>Error</div>
      ): (
        <div className='users-list-container'>
          <h1>Users List</h1>
          {users && users.length > 0 && users.map((user: IUser, index: number) => 
            (
              <Link key={`user-${index}`} to={`user/${user.id}`}>
                {user.id} - {user.first_name} - {user.last_name} - {user.email}
              </Link>
            )
          )}
        </div>
      )}
    </div>
  );
}

export default Home;
