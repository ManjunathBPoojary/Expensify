import { addExpense, removeExpense, editExpense } from '../../actions/expenses';

test('should setup remove expense action object', () => {
    const action = removeExpense({ id: '123asdf'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123asdf'
    });
});

test('should setup edit expense action object',()=>{
    const action = editExpense('123abc', { note: 'New Note' });
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {
            note: 'New Note'
        }
    })
});

test('should setup add expense action object with provided values', () =>{
    const expenseData = {
        description: 'Rent',
        amount: 109500,
        createdAt: 10000,
        note: 'Last month rent'
    };

    const action = addExpense(expenseData);

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    });
});

test('should setup add expense action object with default values',()=>{
    const action = addExpense();

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: '',
            amount: 0,
            createdAt: 0,
            note: ''
        }
    });
});