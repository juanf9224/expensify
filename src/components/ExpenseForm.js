import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

export default class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: props.expense ? props.expense.description : '',
      note: props.expense ? props.expense.note : '',
      amount: props.expense ? (props.expense.amount / 100).toString(): '',
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      calendarFocus: false,
      error: ''
    }
  }

  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };

  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState(() => ({ note }));
  };

  onAmountChange = (e) => {
    const amount = e.target.value;
    if (amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
    }
  };

  onDatechange = (createdAt) => {
    this.setState(() => ({ createdAt }));
  }

  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocus: focused }));
  }

  onSubmit = (e) => {
    e.preventDefault();

    if (!this.state.description || !this.state.amount) {
      // Set error state equal to 'Please provide description and amount'
      this.setState(() => ({ error: 'Please provide description and amount' }));
    } else {
      // Clear error
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10) * 100,
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note
      });
      console.log('submitted');
    }
  }

  render() {
    return (
      <div>
        {this.state.error && <p style={({ color: 'red' })}>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            name="description"
            placeholder="Description"
            autoFocus
            value={this.state.description}
            onChange={this.onDescriptionChange}
          />
          <input
            type="text"
            name="amount"
            placeholder="Amount"
            value={this.state.amount}
            onChange={this.onAmountChange}
          />
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDatechange}
            focused={this.state.calendarFocus}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={(day) => false}
          />
          <textarea
            placeholder="Add a note for your expense (Optional)"
            value={this.state.note}
            onChange={this.onNoteChange}
          >
          </textarea>
          <button type="submit">{ this.props.expense ? 'Update Expense' : 'Add Expense' }</button>
        </form>
      </div>
    )
  }
}