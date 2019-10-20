import React from 'react';
import { connect } from 'react-redux';
const ExpenseListItem = (props) => (
    <div>
        {props.expenses.map((expense, key) => (
            <li key={key}>
                {expense.amount}
                {expense.description}
                {expense.createAt}
            </li>
        )
        )}
    </div>


);
const mapStateToProps = (state) => {
    return {
        expenses: state.expenses
    }
}
export default connect(mapStateToProps)(ExpenseListItem)