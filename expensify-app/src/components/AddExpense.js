import React from 'react';
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm';
import { addExpense } from '../actions/expenses'

const AddExpensePage = (props) => (
    <div>
    <h1>Add Expense</h1>
        <ExpenseForm 
        // render the expenses input into the dashboard
            onSubmit={(expense) => {
                // add the data to the redux store
                props.dispatch(addExpense(expense));
                // redirect after pressing add expense
                props.history.push('/')
            }}
        />
    </div>

)

export default connect()(AddExpensePage);