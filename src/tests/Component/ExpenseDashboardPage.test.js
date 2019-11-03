import React from 'react';
import { shallow } from 'enzyme';
import ExpenseDashboardPage from '../../components/ExpenseDashboardPage';
import expectExport from 'expect';

test('Should render ExpenseDashboard', () => {
    const wrapper = shallow(<ExpenseDashboardPage />);
    expectExport(<wrapper />).toMatchSnapshot();
})