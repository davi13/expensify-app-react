import { createStore, combineReducers } from 'redux'
//ADD_EXPENSE
//REMOVE_EXPENSE
//EDIT_EXPENSE
//SET_TEXT_FILTER
//SORT_BY_DATE
//SORT_BY_AMOUNT
//SET_START_DATE
//SET_END_DATE

//Expense Reducer
const expenseReducerDefault = [];
const expenseReducer = (state = expenseReducerDefault, action) => {
    switch (action.type) {
        case '':
        default:
            return state
    }
}

//filters Reducer

const filtersReducerDefault = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

const filtersReduce = (state = filtersReducerDefault, action) => {
    switch (action.type) {
        case '':
        default:
            return state
    }
}


//Store Creation
const store = createStore(
    combineReducers({
        expense: expenseReducer,
        filters: filtersReduce

    })
);

console.log(store.getState());
const demoState = {
    expense: [{
        id: 'azerty',
        description: 'January Rent',
        note: 'this was the final payment for that address',
        amount: 54500,
        createAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', // date or amount
        startDate: undefined,
        endDate: undefined
    }
};