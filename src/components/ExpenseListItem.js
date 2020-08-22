import React from 'react';
import { Link } from 'react-router-dom';
import { removeExpense } from '../actions/expenses';
import numeral from 'numeraljs';
import moment from 'moment';
const ExpenseListItem = ({ id, description, amount, createdAt, dispatch }) => (
  
  <tr>
    <td>{description}</td>
    <td>{numeral(amount / 100).format('$0,0.00')}</td>
    <td>{moment(createdAt).format('MMMM Do, YYYY')}</td>
    <td><Link to={`/edit/${id}`}>Edit</Link></td>
    <td><button onClick={() => dispatch(removeExpense({ id }))}>Remove</button></td>
  </tr>
);

export default ExpenseListItem;
