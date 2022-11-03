// Stateless Function Component 
import React from 'react';

// Action provides the two buttons 
    // handle pick randomly selects an option
const Action = (props) => {
    return (
       <div>
          <button
           onClick={props.handlePick}
          disabled={!props.hasOptions}
          >
          What should I do?
          </button>
       </div>
    )
 };
 
 export default Action;