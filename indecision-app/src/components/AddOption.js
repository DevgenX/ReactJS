import React from 'react';

export default class AddOption extends React.Component {
   state = {
      error : undefined
   };
    constructor(props) {
       super(props)
       this.handleAddOption = this.handleAddOption.bind(this)
    }
    
    handleAddOption = (e) => {
 
       e.preventDefault();
       const option = e.target.elements.option.value.trim();
       const error = this.props.handleAddOption(option);
 
       this.setState(() => ({ error //error: error 
    }))
    // clear the input bar if there is no error
    if (!error) {
       e.target.elements.option.value = ''
       }
    }
 
    render() {
       return (
          <div>
             {this.state.error && <p>{this.state.error}</p>}
             <form onSubmit={this.handleAddOption}>
                <input type="text" name='option' placeholder="Input options">
                </input>
                <button>Add Option</button>
             </form>
          </div>
       )
    }
 }