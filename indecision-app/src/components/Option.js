import React from 'react';

// Option component prints the individual item with the remove button 

 const Option = (props) => {
    return (
       <div>
          {props.optionText}
          <button onClick={(e) => {
             props.handleDeleteOption(props.optionText)
          }}
          >
          remove
          </button>
       </div>
       )
 }
 
 export default Option;