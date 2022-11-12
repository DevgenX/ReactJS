import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense , removeExpense } from '../actions/expenses'


const EditExpensePage = (props) => {
  return  (
        <div>
            <ExpenseForm
            expense={props.expense}
                onSubmit={(expense) => {
                    // update the edited expense  
                    props.dispatch(editExpense(props.expense.id, expense))
                    props.history.push('/')
                }}
            />
            <button onClick={() => {
                props.dispatch(removeExpense({ id: props.expense.id}))
                props.history.push('/')
             }}>Remove</button>
        </div>
    );
    
};

const mapStateToProps = (state, props) => {
    return {
        // Expense ID === ID of the input expense list
        // props.match.params.id is the ID in the props or browser
        expense: state.expenses.find((expense) => expense.id === props.match.params.id)
        };
    }


export default connect(mapStateToProps)(EditExpensePage);


