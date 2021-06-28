import React from 'react';
import { useLocation, RouteComponentProps } from "@reach/router";

interface UserProps extends RouteComponentProps<{
    id?: string;
}>{}

const User = (props: UserProps) => {
    const location = useLocation();
    return (
        <div>User Info: {props.id}</div>
    );
};

export default User;