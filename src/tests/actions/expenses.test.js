import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('Should remove an expense', () => {
  const result = removeExpense({ id: '123abc' });
  expect(result).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  })
})