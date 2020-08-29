import { v4 as uuidv4 } from 'uuid';
import database  from '../firebase/firebase';

export const addExpense = (expense) => ({
  type: 'ADD_EXPENSE',
  expense
  });

export const startAddExpense = (expenseData = {}) => {
  return (dispatch) => {
    const {
      description = '',
      note = '',
      amount = 0,
      createdAt = 0
    } = expenseData;
    const expense = { description, note, amount, createdAt };
    
    return database.ref('expenses')
      .push(expense)
      .then((ref) => dispatch(addExpense({
        id: ref.key,
        ...expense
      })));
  }; 
};

export const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});

export const editExpense = (id, update) => ({
  type: 'EDIT_EXPENSE',
  id,
  update
});

export const setExpenses = (expenses = []) => ({
  type: 'SET_EXPENSES',
  expenses,
});

export const startFetchExpenses = () => {
  console.log('startFetchExpenses');
  return (dispatch) => {
    return database
      .ref('expenses')
      .once('value')
      .then(snapshot => {        
        const expensesData = [];        

        snapshot.forEach(childSnapshot => {
          expensesData.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
          });
        });
        return dispatch(setExpenses(
          expensesData
        ));
      });
  }
}