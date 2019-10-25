import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../actions/filters';

class ExpenseListFilters extends React.Component {
    state = {
        calenderFocused: null
    }
    onDatesChange = ({ starDate, endDate }) => {
        this.props.dispatch(setStartDate(starDate));
        this.props.dispatch(setEndDate(endDate));
    }
    render() {
        return (
            <div>
                <input
                    type="text"
                    value={this.props.filters.text}
                    onChange={(e) => {
                        this.props.dispatch(setTextFilter(e.target.value));
                    }}
                />
                <select
                    value={this.props.filters.sortBy}
                    onChange={(e) => {
                        e.target.value === 'date' ? this.props.dispatch(sortByDate(e.target.value)) : this.props.dispatch(sortByAmount(e.target.value));
                    }}
                >
                    <option value="date">Date</option>
                    <option value="amount">amount</option>
                </select>
                <DateRangePicker
                    startDate={this.props.filters.starDate}
                    endDate={this.props.filters.starDate}
                    onDatesChange={this.onDatesChange}
                />
            </div>
        );
    }
};
const mapStateToProps = (state) => {
    return {
        filters: state.filters
    };

};

export default connect(mapStateToProps)(ExpenseListFilters);