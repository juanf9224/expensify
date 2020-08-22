import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';

const ExpenseListItem = ({ id, description, amount, createdAt, dispatch }) => (
  
  <tr>
    <td>{description}</td>
    <td>{amount}</td>
    <td>{createdAt}</td>
    <td><Link to={`/edit/${id}`}>Edit</Link></td>
    <td><button onClick={() => dispatch(removeExpense({ id }))}>Remove</button></td>
  </tr>
);

export default connect()(ExpenseListItem);
