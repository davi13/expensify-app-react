import React from 'react'
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary'
import expenses from '../fixtures/expenses';

test('should rendly correctly expensesSummary', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={235} />);
    expect(wrapper).toMatchSnapshot();
});
test('should rendly correctly expensesSummary with mutiple expenses', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={2} expensesTotal={235} />);
    expect(wrapper).toMatchSnapshot();
});

