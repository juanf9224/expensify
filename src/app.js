import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'normalize.css/normalize.css';
import './styles/styles.scss'; 
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

const store = configureStore();

store.dispatch(addExpense({ description: 'Water Bill', amount: 109500, createdAt: 1500 }));
store.dispatch(addExpense({ description: 'Gas Bill', amount: 2015, createdAt: 2000 }));
store.dispatch(addExpense({ description: 'Rent', amount: 1250, createdAt: 2450 }));

const state = store.getState();
const visible = getVisibleExpenses(state.expenses, state.filters);
console.log(visible);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'));