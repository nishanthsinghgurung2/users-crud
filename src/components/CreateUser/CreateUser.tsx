import React from 'react';
import {
    Formik,
    Form,
    Field,
  } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { createUserRequest } from '../../store/user/actions';
import { IUser } from '../../store/usersList/types';
import { RouteComponentProps } from '@reach/router';
import './CreateUser.css';
import { getErrorSelector, getPendingSelector, getUserInfoSelector } from '../../store/user/selectors';
import { initialUserState } from '../../store/user/reducer';
  interface MyFormValues {
    firstName: string;
    lastName: string;
    email: string;
    avatar: string;
  }

  const CreateUserSchema = Yup.object().shape({
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

const CreateUser: React.FC<RouteComponentProps> = () => {
    const dispatch = useDispatch();
    const pending = useSelector(getPendingSelector);
    const userInfo = useSelector(getUserInfoSelector);
    const error = useSelector(getErrorSelector);

    const initialValues: MyFormValues = { firstName: '', lastName: '', email: '', avatar: ''};

    const handleCreateUser = (values: any, actions: any) => {
        dispatch(createUserRequest({
            first_name: values.firstName,
            last_name: values.lastName,
            email: values.email,
            avatar: values.avatar
        } as IUser));
    };
    
    return (
        <div className="create-user">
            <h1>Create User</h1>
            <Formik
                initialValues={initialValues}
                onSubmit={handleCreateUser}
                validationSchema={CreateUserSchema}
            >
                {({ errors, touched }) => (
                    <Form className="create-user-form">
                        <div className="create-user-form-item">
                            <label htmlFor="firstName" className="create-user-form-label">First Name</label>
                            <Field id="firstName" name="firstName" placeholder="First Name" />
                            {errors.firstName && touched.firstName ? (
                                <div className="api-failure">{errors.firstName}</div>
                            ) : null}
                        </div>
                        <div className="create-user-form-item">
                            <label htmlFor="lastName" className="create-user-form-label">Last Name</label>
                            <Field id="lastName" name="lastName" placeholder="Last Name" />
                            {errors.lastName && touched.lastName ? (
                                <div className="api-failure">{errors.lastName}</div>
                            ) : null}
                        </div>
                        <div className="create-user-form-item">
                            <label htmlFor="email" className="create-user-form-label">Email</label>
                            <Field id="email" name="email" placeholder="Email" />
                            {errors.email && touched.email ? (
                                <div className="api-failure">{errors.email}</div>
                            ) : null}
                        </div>
                        <div className="create-user-form-item">
                            <label htmlFor="avatar" className="create-user-form-label">Avatar</label>
                            <Field id="avatar" name="avatar" placeholder="Avatar" />
                        </div>
                        <button type="submit" className="create-user-form-submit">Create User</button>
                    </Form>
                )}
            </Formik>
            {pending? (
                <div>Loading...</div>
            ): error? (
                <div className="api-failure padding-top-20">Error</div>
            ): (userInfo !== initialUserState.userInfo)? (
                <div className="api-success padding-top-20">User successfully created</div>
            ): null}
        </div>
    );
};

export default CreateUser;