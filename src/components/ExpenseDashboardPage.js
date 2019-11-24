import React from 'react';
//import ExpensesSmmary from '../components/ExpensesSummary'
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import ExpensesSummary from './ExpensesSummary';

const ExpenseDashboardPage = () => (
    <div>
        <ExpensesSummary />
        <ExpenseListFilters />
        <ExpenseList />
        
    </div>
);

export default ExpenseDashboardPage;
