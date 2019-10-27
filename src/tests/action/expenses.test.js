import { addExpense, editExpense, removeExpense } from '../../actions/expenses';
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