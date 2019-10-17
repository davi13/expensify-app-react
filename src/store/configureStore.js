import { createStore, combineReducers } from 'redux';
import expensesReducer from '../reducers/expenses';
import filtersReduce from '../reducers/filters';

export default () => {
    //Store Creation
    const store = createStore(
        combineReducers({
            expenses: expensesReducer,
            filters: filtersReduce
        })
    );
    return store
};