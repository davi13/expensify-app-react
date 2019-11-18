import { addExpense, editExpense, removeExpense } from '../../actions/expenses';
import expenses from '../fixtures/expenses';

test('should setup remove expense action object', () => {
    const action = removeExpense({ id: '123abc' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});

test('should setup edit an expense action object', () => {
    const action = editExpense('123abc', { notes: 'new note Value' });
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {
            notes: 'new note Value'
        }
    });
});

test('should setup add an expense action object with provided values', () => {

    const action = addExpense(expenses[2]);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[2]
    });
});

// test('should setup add an expense action object with default values', () => {
//     const action = addExpense();
//     expect(action).toEqual({
//         type: 'ADD_EXPENSE',
//         expense: {
//             id: expect.any(String),
//             description: '',
//             note: '',
//             amount: 0,
//             createdAt: 0
//         }
//     });
// });

