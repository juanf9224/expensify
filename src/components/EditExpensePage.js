import React from 'react';
import { connect } from 'react-redux';
import { editExpense } from '../actions/expenses';
import ExpenseForm from './ExpenseForm';

export const EditExpensePage = (props) => (
  <div>
    <ExpenseForm
      expense={props.expense}
      onSubmit={(expense) => {
        console.log(expense);
        props.dispatch(editExpense(props.expense.id, expense));
        props.history.push('/');
      }}
    />
  </div>
);

const mapToStateToProps = (state, props) => {
  return {
    expense: state.expenses.find(e => e.id === props.match.params.id)
  }
};

export default connect(mapToStateToProps)(EditExpensePage);