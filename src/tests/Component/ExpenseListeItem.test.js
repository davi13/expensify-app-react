import React from 'react';
import { shallow } from 'enzyme'
import { ExpenseListItem } from '../../components/ExpenseListItem';
import expenses from '../fixtures/expenses';
import expectExport from 'expect';

test('Should render ExpenseListItem with expenses', () => {
    const wrapper = shallow(<ExpenseListItem {...expenses[2]} />)
    expectExport(wrapper).toMatchSnapshot();
})