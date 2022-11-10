import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';

const EditExpensePage = (props) => {
  return  (
        <div>
            <ExpenseForm
            expense={props.expense}
                onSubmit={(expense) => {
                    console.log('updated', expense)
                }}
            />
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


