import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import './firebase/firebase'; import 'react-dates/lib/css/_datepicker.css';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startFetchExpenses } from './actions/expenses';

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

store.dispatch(startFetchExpenses()).then(() => {
  ReactDOM.render(jsx, document.getElementById('app'));
});