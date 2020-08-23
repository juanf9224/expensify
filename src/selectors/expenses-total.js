export default (expenses) => {
  if (expenses && Array.isArray(expenses) && expenses.length > 0) {
    return expenses
      .map(e => e.amount)
      .reduce((e1, e2) => e1 + e2);
  } else {
    return 0;
  }
};