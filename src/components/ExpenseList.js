import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

const ExpenseList = (props) => {
  const expenseListItems = props.expenses.map(e => (
    <ExpenseListItem key={e.id} {...e}/>
    )
  );
  return (
    <div>
      <h1>Expense List</h1>
      <table>
        <thead>
          <tr>
            <th>Description</th>
            <th>Amount</th>
            <th>Created At</th>
          </tr>
        </thead>
        <tbody>
          {expenseListItems}
        </tbody>
      </table>
    </div>
  )
};

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  }
};

export default connect(mapStateToProps)(ExpenseList);