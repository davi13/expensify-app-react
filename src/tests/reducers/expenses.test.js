import expensesReducer from '../../reducers/expenses';


test('Should set defualt state', ()=>{
    const state= expensesReducer(undefined,{type:'@@INIT'})
    expect(state).toEqual([]);
});