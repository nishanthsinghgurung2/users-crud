import React, { useEffect, useState } from 'react';
import { RouteComponentProps, navigate, Link } from "@reach/router";
import { useDispatch, useSelector } from 'react-redux';
import { getErrorSelector, getPendingSelector, getUserInfoSelector } from '../../store/fetchUser/selectors';
import { getDeletedUserStatusSelector, getDeletedUserPendingSelector, getDeletedUserErrorSelector } from '../../store/deleteUser/selectors';
import { IUser } from '../../store/usersList/types';
import { fetchUserRequest } from '../../store/fetchUser/actions';
import { deleteUserRequest } from '../../store/deleteUser/actions';
import "./User.css";
interface UserProps extends RouteComponentProps<{
    id?: string;
}>{}

const User = (props: UserProps) => {
    const dispatch = useDispatch();
    const pending = useSelector(getPendingSelector);
    const userInfo: IUser = useSelector(getUserInfoSelector);
    const error = useSelector(getErrorSelector);

    const deleteUserPending = useSelector(getDeletedUserPendingSelector);
    const deleteUserStatus = useSelector(getDeletedUserStatusSelector);
    const deleteUserError = useSelector(getDeletedUserErrorSelector);
    const [deleteUserClicked, setDeleteUserClicked] = useState(false);

    const handleDeleteUser = () => {
        dispatch(deleteUserRequest({ id: Number(props?.id)}))
        setDeleteUserClicked(true);
    };

    useEffect(() => {
        dispatch(fetchUserRequest({ id: Number(props?.id) }));
    }, [])

    return (
        <div className="fetched-user">
            <Link className="home" to="/">Go Home</Link>
            <h1>User Details</h1>
            {pending? (
            <div>Loading...</div>
            ): error? (
                <div>Error</div>
            ): (
                <div>
                    {userInfo? (
                        <div>
                            <div className="fetched-user-item">First Name: {userInfo.first_name}</div>
                            <div className="fetched-user-item">Last Name: {userInfo.last_name}</div>
                            <div className="fetched-user-item">Email: {userInfo.email}</div>
                            {userInfo.avatar? <div className="fetched-user-item">Avatar: {userInfo.avatar}</div> : null }
                        </div>
                    ): null}
                </div>
            )}
            <div className="user-buttons padding-top-20">
                <button onClick={() => navigate('/edit-user')}>Edit User</button>
                <button onClick={handleDeleteUser}>Delete User</button>
                {deleteUserPending? (
                    <div>Loading...</div>
                ): deleteUserError? (
                    <div className="api-failure padding-top-20">Error</div>
                ): (deleteUserClicked && deleteUserStatus)? (
                    <div className="api-success padding-top-20">User successfully deleted</div>
                ): null}
            </div>
        </div>
    );
};

export default User;