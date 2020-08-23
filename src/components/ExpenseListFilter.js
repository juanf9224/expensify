import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters';
import { DateRangePicker } from 'react-dates';

class ExpenseListFilter extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      calendarFocus: null
    };
  }

  onDatesChange = ({ startDate, endDate }) => {
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
  }

  onFocusChange = (calendarFocus) => {
    this.setState(() => ({ calendarFocus }))
  }

  isOutsideRange = () => {
    return false;
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.props.filters.text}
          onChange={(e) => this.props.dispatch(setTextFilter(e.target.value))}
        />
        <select
          value={this.props.filters.sortBy}
          onChange={(e) => this.props.dispatch(e.target.value === 'date' ? sortByDate() : sortByAmount())}
        >
          <option value="amount">
            Amount
      </option>
          <option value="date">
            Date
      </option>
        </select>

        <DateRangePicker     
          startDate={this.props.filters.startDate}
          endDate={this.props.filters.endDate}
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.calendarFocus}
          onFocusChange={this.onFocusChange}
          numberOfMonths={1}
          isOutsideRange={this.isOutsideRange}          
        />
      </div>
    );

  }
}

const mapToState = (state) => {
  return {
    filters: state.filters
  }
}

export default connect(mapToState)(ExpenseListFilter);