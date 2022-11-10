import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByDate, sortByAmount } from '../actions/filters';

// input box 
const ExpenseListFilters = (props) => (
    <div>
        <input type='text' value={props.filters.text} onChange={(e) => {
            // set Text filter accepts as string as argument
                // e.target.value is the current value being passed-in
            props.dispatch(setTextFilter(e.target.value))
        }}
        />
        <select
        // set the filter into sortByAmount or sortByDate
         value={props.filters.sortBy} onChange={(e) => {
            if (e.target.value === 'date') {
                 props.dispatch(sortByDate())
            }else if (e.target.value === 'amount') {
                 props.dispatch(sortByAmount())
            }
         }}
         >
            <option value="date">Date</option>
            <option value="amount">Amount</option>
        </select>
    </div>
);

// connects the regular function to the redux store
const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}

export default connect(mapStateToProps)(ExpenseListFilters);