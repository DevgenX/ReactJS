// combine reducers ables us to combine reducers to create multiple smaller functions
// and combine them together



// store creation 
// Instead of putting the array into the root(default) put into the expenses property
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters : filtersReducer
    })
 );

store.subscribe(() => {
    const state = store.getState()
    const visibleExpenses = getVisibleEXpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

// Action generator calls

const expense1 = store.dispatch(addExpense( {description: 'Rent', amount: 300, createdAt: -21000 } ))
const expense2 = store.dispatch(addExpense( {description: 'Coffee', amount: 400, createdAt: -998} ))

// store.dispatch(removeExpense( { id: expense1.expense.id }))
// store.dispatch(editExpense(expense2.expense.id, { amount: 500 }))

// store.dispatch(setTextFilter('rent'))

store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(125));
// // store.dispatch(setStartDate());
// store.dispatch(setEndDate(999));
// store.dispatch(setTextFilter('rent'))

const demoState = {
    expenses : [{ 
        id: 'eee',
        description: 'Rent',
        note: 'This was the final payment for the unit',
        amount: 54500,
        createdAt: 0
    }], 
    filters: {
        text: 'rent',
        sortBy: [], //date or amount
        startDate: undefined,
        endDate: undefined
    }
}
