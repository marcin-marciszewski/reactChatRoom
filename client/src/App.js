import React, { Fragment, useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import SearchBar from './components/layout/SearchBar';
import Messages from './components/messages/Messages';
import AddMessage from './components/messages/AddMessage';
import AddUser from './components/users/AddUser';
import { Provider } from 'react-redux';
import store from './store';
import './App.css';

const App = () => {
  useEffect(() => {
    // Init Materialize JS
    M.AutoInit();
  });
  return (
    <Provider store={store}>
      <Fragment>
        <SearchBar />
        <div className='container'>
          <Messages />
        </div>{' '}
        <AddMessage />
        <AddUser />
      </Fragment>
    </Provider>
  );
};

export default App;
