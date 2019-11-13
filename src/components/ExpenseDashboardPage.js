import React from 'react';
import ExpensesSmmary from '../components/ExpensesSummary'
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';


const ExpenseDashboardPage = () => (
    <div>
        <ExpenseListFilters />
        <ExpenseList />
        <ExpensesSmmary />
    </div>
);

export default ExpenseDashboardPage;
