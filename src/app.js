import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import { firebase } from './firebase/firebase';
import 'react-dates/lib/css/_datepicker.css';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startFetchExpenses } from './actions/expenses';
import { login, logout } from './actions/auth';

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

let hasRendered = false;
const renderFn = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('app'));
    hasRendered = true;
  }
};

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    console.log('uid', user.uid);
    store.dispatch(login(user.uid));
    store.dispatch(startFetchExpenses()).then(() => {
      renderFn();
      if (history.location.pathname === '/') {
        history.push('/dashboard');
      }
    });
  } else {
    renderFn();
    history.push('/');
  }
});