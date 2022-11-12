import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem'
import selectExpenses from '../selectors/expenses'
import expenses from '../selectors/expenses';
// implicit return no need for a body or complicated function body
// React and redux use this codebase

// Unconnected Component
const ExpenseList = (props) => (
    <div>
        <h1>Expense List</h1>
        {
            props.expenses.length === 0 ? (<p>No expenses</p>)
             : (
                props.expenses.map((expense) => {
                    return <ExpenseListItem 
                                key={expense.id}
                                {...expense}
                    />
                })  
            )
        }
        
    </div>
);

// Function to passed in to connect
const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    };
};

// Connect the component in the store/function
export default connect(mapStateToProps)(ExpenseList);

