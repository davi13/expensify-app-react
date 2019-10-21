import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByAmount, sortByDate } from '../actions/filters';

const ExpenseListFilters = (props) => (
    <div>
        <input
            type="text"
            value={props.filters.text}
            onChange={(e) => {
                props.dispatch(setTextFilter(e.target.value));
            }}
        />
        <select
            value={props.filters.sortBy}
            onChange={(e) => {
                e.target.value === 'date' ? props.dispatch(sortByDate(e.target.value)) : props.dispatch(sortByAmount(e.target.value));

            }}
        >
            <option value="date">Date</option>
            <option value="amount">amount</option>
        </select>
    </div>
);
const mapStateToProps = (state) => {
    return {
        filters: state.filters
    };

};

export default connect(mapStateToProps)(ExpenseListFilters);