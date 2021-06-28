import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './index.css';
import store from './store';
import reportWebVitals from './reportWebVitals';
import { Router } from '@reach/router';
import Home from './components/Home/Home';
import User from './components/User/User';
import CreateUser from './components/CreateUser/CreateUser';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <Router>
        <Home path="/" />
        <User path="user/:id" />
        <CreateUser path="create-user" />
    </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
