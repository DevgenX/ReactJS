import React from 'react';
import moment from 'moment';


const now = moment();

console.log(now)


export default class ExpenseForm extends React.Component {
    state = {
        description : '',
        note : '',
        amount : ''

    };
    onNoteChange = (e) => {
        // optional 
        e.persist()
        this.setState(() => ({
            note : e.target.value
        }))
    }

    onDescriptionChange = (e) => {
        // more readable format
        const description = e.target.value;
        this.setState(() => ( {
            description,
        } ))
    }
    onAmountChange = (e) => {
        const amount = e.target.value;
        // 2 decimal points and only numbers, match can only be matched with the format given
            // by the regEx
        if (amount.match(/^\d*(\.\d{0,2})?$/)) {
            this.setState(() => ( { amount } ))
        }
    };

    render () {
        return (
            <div>
                <form>
                    <input 
                    type="text"
                    placeholder='Description'
                    autoFocus
                    value={this.state.description}
                    onChange={this.onDescriptionChange}
                    />
                    <input
                        type="text"
                        placeholder="Amount"
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                    />
                    <textarea
                    placeholder="Add a note for your expense(optional)"
                    value={this.state.note}
                    onChange={this.onNoteChange}
                    >
                    </textarea>
                    <button>Add Expense</button>
                </form>
            </div>
        )
    }

}