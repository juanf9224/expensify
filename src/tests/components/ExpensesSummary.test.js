import { shallow } from 'enzyme';
import React from 'react';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('should render ExpensesSummary correctly', () => {
  const wrapper = shallow(<ExpensesSummary expensesCount={1} expensesTotal={23500}/>);
  expect(wrapper).toMatchSnapshot();
});