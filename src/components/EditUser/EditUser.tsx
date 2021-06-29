import React, { useState } from 'react';
import {
    Formik,
    Form,
    Field,
  } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { IUser } from '../../store/usersList/types';
import { Link, RouteComponentProps } from '@reach/router';
import './EditUser.css';
import { getErrorSelector, getPendingSelector, getUserInfoSelector } from '../../store/editUser/selectors';
import { getUserInfoSelector as selectedUserInfoSelector } from '../../store/fetchUser/selectors';
import { initialUserState } from '../../store/editUser/reducer';
import { editUserRequest } from '../../store/editUser/actions';
  interface MyFormValues {
    firstName: string;
    lastName: string;
    email: string;
    avatar: string;
  }

  const EditUserSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    lastName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
  });

const EditUser: React.FC<RouteComponentProps> = () => {
    const dispatch = useDispatch();
    const pending = useSelector(getPendingSelector);
    const userInfo: IUser = useSelector(getUserInfoSelector);
    const selectedUserInfo: IUser = useSelector(selectedUserInfoSelector);
    const error = useSelector(getErrorSelector);
    const [updateUserClicked, setUpdateUserClicked] = useState(false);

    const { first_name, last_name, email, avatar} = selectedUserInfo;
    const initialValues: MyFormValues = { 
        firstName: first_name,
        lastName: last_name,
        email: email,
        avatar: avatar? avatar: ''
    };

    const handleEditUser = (values: any, actions: any) => {
        dispatch(editUserRequest({
            first_name: values.firstName,
            last_name: values.lastName,
            email: values.email,
            avatar: values.avatar
        } as IUser));
        setUpdateUserClicked(true);
    };
    
    return (
        <div className="edit-user">
            <Link className="home" to="/">Go Home</Link>
            <h1>Edit User</h1>
            <Formik
                initialValues={initialValues}
                onSubmit={handleEditUser}
                validationSchema={EditUserSchema}
            >
                {({ errors, touched, isValid }) => (
                    <Form className="edit-user-form">
                        <div className="edit-user-form-item">
                            <label htmlFor="firstName" className="edit-user-form-label">First Name</label>
                            <Field id="firstName" name="firstName" placeholder="First Name" />
                            {errors.firstName && touched.firstName ? (
                                <div className="api-failure">{errors.firstName}</div>
                            ) : null}
                        </div>
                        <div className="edit-user-form-item">
                            <label htmlFor="lastName" className="edit-user-form-label">Last Name</label>
                            <Field id="lastName" name="lastName" placeholder="Last Name" />
                            {errors.lastName && touched.lastName ? (
                                <div className="api-failure">{errors.lastName}</div>
                            ) : null}
                        </div>
                        <div className="edit-user-form-item">
                            <label htmlFor="email" className="edit-user-form-label">Email</label>
                            <Field id="email" name="email" placeholder="Email" />
                            {errors.email && touched.email ? (
                                <div className="api-failure">{errors.email}</div>
                            ) : null}
                        </div>
                        <div className="edit-user-form-item">
                            <label htmlFor="avatar" className="edit-user-form-label">Avatar</label>
                            <Field id="avatar" name="avatar" placeholder="Avatar" />
                        </div>
                        <button type="submit" disabled={!isValid}  className="edit-user-form-submit">Edit User</button>
                    </Form>
                )}
            </Formik>
            {pending? (
                <div>Loading...</div>
            ): error? (
                <div className="api-failure padding-top-20">Error</div>
            ): (updateUserClicked && userInfo && userInfo !== initialUserState.userInfo)? (
                <div className="api-success padding-top-20">User successfully edited</div>
            ): null}
        </div>
    );
};

export default EditUser;