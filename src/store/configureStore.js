import { createStore, combineReducers } from 'redux';
import expenseReducer from '../reducers/expenses';
import filtersReduce from '../reducers/filters';

export default () => {
    //Store Creation
    const store = createStore(
        combineReducers({
            expense: expenseReducer,
            filters: filtersReduce
        })
    );
    return store
}


