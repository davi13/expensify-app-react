import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';


export class EditPage extends React.Component {
    onSubmit = (expense) => {
        this.props.editExpense(expense);
        this.props.history.push('/');
    }
    render() {
        return (
            <div>
                <ExpenseForm
                    expense={this.props.expense}
                    onSubmit={this.onSubmit} />
                <button onClick={() => {
                    this.props.dispatch(removeExpense({ id: props.expense.id }));
                    this.props.history.push('/')

                }}> Remove </button>
            </div>
        );
    }
}
const mapDispatchToProps = (dispatch) => ({
    editExpense: dispatch(editExpense(expense))
})

export default connect(mapDispatchToProps)(EditPage);