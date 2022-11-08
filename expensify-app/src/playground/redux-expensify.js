// combine reducers ables us to combine reducers to create multiple smaller functions
// and combine them together

import { createStore, combineReducers} from 'redux'
import { v4 as uuidv4 } from 'uuid'


const addExpense = (
     {
    description='', 
     note = '',
      amount = 0, 
      createdAt = 0
    } = {}) =>({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuidv4(),
        description,
        note,
        amount,
        createdAt
    }
})

// Action generatos

const removeExpense = ( {id} ) => ({
    type: 'REMOVE_EXPENSE',
    id,
})

const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates,
})

const setTextFilter = (text = '') => ({
    type: 'SET_TEXT',
    text
})

const sortByDate = () => ({
    type: 'SORT_BY_DATE',
})

const sortByAmount = () => ({
    type:'SORT_BY_AMOUNT',
})

const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate,
})

const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate,
})

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE': 
        return [
            ...state, action.expense
        ]
        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => id !== action.id )
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if(expense.id === action.id) {
                    return {
                        ...expense, 
                        ...action.updates
                    }
                } else {
                    return expense;
                }
            })
        default: 
        return state;
    }
};

const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT' :
            return {
                ...state,
                text : action.text
            }
        case 'SORT_BY_AMOUNT' :
            return {
                ...state, 
                sortBy : 'amount'
            } 
        case 'SORT_BY_DATE' :
            return {
                 ...state, 
                 sortBy : 'date'
             } 
        case 'SET_START_DATE': 
            return {
                ...state,
                startDate: action.startDate
            }
            case 'SET_END_DATE': 
            return {
                ...state,
                endDate: action.endDate
            }
        default:
            return state;
    }
}

const getVisibleEXpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase())

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if (sortBy === 'date') {
            // if a is less than b, we return the most recent
            return a.createdAt < b.createdAt ? 1 : -1
        }else if (sortBy === 'amount') {
            // if a amount is less than b the truthy will return b first
            return a.amount < b.amount ? 1 : -1
        }
    });
}

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
