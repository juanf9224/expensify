import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('it should sum all amounts from given expeneses array', () => {
  // replicate sum logic to match with desired selector
  const amountArr = expenses.map(e => e.amount);
  const matchTotal = amountArr.reduce((e1, e2) => e1 + e2);

  expect(selectExpensesTotal(expenses)).toBe(matchTotal);
});

test('it should return 0 if no expenses are provided', () => {

  expect(selectExpensesTotal([])).toBe(0);
});

test('it should return the given amount when only one expense is provided', () => {
  expect(selectExpensesTotal([expenses[0]])).toBe(expenses[0].amount);
});
