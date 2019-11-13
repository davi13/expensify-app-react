import React from 'react'
import numeral from 'numeral'
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = ({ expenseCount, expensesTotal }) => {
    //const totalAmount = props.expenses.map((expense) => expense.amount).reduce((sum, value) => sum + value, 0);

    const expenseWord = expenseCount === 1 ? 'expense' : 'expenses'
    const formattedExpensesTotal = numeral(expensesTotal / 100).format('$0,0.00')
    return (
        <div>
            <span>
                {`Viewing  ${expenseCount} ${expenseWord} totalling ${formattedExpensesTotal}`}

            </span>
        </div>
    )
}
const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters);
    return {
        expenseCount: visibleExpenses.length,
        expensesTotal: selectExpensesTotal(visibleExpenses)
    }
}
export default connect(mapStateToProps)(ExpensesSummary);