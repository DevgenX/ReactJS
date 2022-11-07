import { createStore } from 'redux';

// Action generator - functions that return action objects 



// use the number by default if no argument is passed in or
// the value that was passed in 

// if there is no argument passed in, it will provide an empty object
    // try to destructure the empty object, it will go back to the default which is 1 

const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy: incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const setCount = ({ setCount } = {}) => ({
    type: 'SET',
    count: setCount

})

const resetCount = () => ({
    type: 'RESET',
    //count : 0
})



// This is a FUNCTION REDUCER
const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT': 
        return {
            count: state.count + action.incrementBy,
        };
        case 'DECREMENT': 
        return {
            count: state.count - action.decrementBy
        }

        case 'SET':
            return {
                count: action.count
            }

        case 'RESET' :
            return {
                count : 0
            }
        default :
        return state;
    }
};

const store = createStore(countReducer)

const unsubscribe = store.subscribe(() => {
    console.log(store.getState())
})

// Actions - are just object that sent to a store 

// Add the action to the store 

store.dispatch(setCount( { setCount: 2 })) // should log : 2;

store.dispatch(incrementCount({ incrementBy: 7})) // should log : 9

store.dispatch(incrementCount()) // should log : 10

store.dispatch(decrementCount()) // should log : 9

store.dispatch(resetCount()) // should log : 0

store.dispatch(decrementCount( { decrementBy: 10}))  // should log : -10


// store.dispatch({
//     type: 'SET',
//     count : 101
// })