import { createStore, combineReducers } from 'redux'
import uuid from 'uuid';
//ADD_EXPENSE
const addExpense = ({ description = '', note = '', amount = 0, createAt = 0 } = {}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createAt
    }
});

//REMOVE_EXPENSE
const removeExpense = ({ id = {} } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

//EDIT_EXPENSE

const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates

})
//SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
})
//SORT_BY_DATE
//SORT_BY_AMOUNT
//SET_START_DATE
//SET_END_DATE

//Expense Reducer
const expenseReducerDefaultState = [];

const expenseReducer = (state = expenseReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ];

        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => id !== action.id);

        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    }
                } else {
                    return expense
                }
            })
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
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            }

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

store.subscribe(() => {
    console.log(store.getState());
});

const expenseOne = store.dispatch(addExpense({ description: 'rent', amount: 100 }));
const expenseTwo = store.dispatch(addExpense({ description: 'coffe', amount: 300 }));

store.dispatch(removeExpense({ id: expenseOne.expense.id }));
store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));

store.dispatch(setTextFilter('rent'))
store.dispatch(setTextFilter())



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




