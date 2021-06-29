import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './index.css';
import store from './store';
import reportWebVitals from './reportWebVitals';
import { Router } from '@reach/router';
import UsersList from './components/UsersList/UsersList';
import User from './components/User/User';
import CreateUser from './components/CreateUser/CreateUser';
import EditUser from './components/EditUser/EditUser';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <Router>
        <UsersList path="/" />
        <User path="user/:id" />
        <CreateUser path="create-user" />
        <EditUser path="edit-user" />
    </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
