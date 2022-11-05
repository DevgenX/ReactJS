import React from 'react';

// Option component prints the individual item with the remove button 

 const Option = (props) => (
       <div className="option">
       <p className="option__text">{props.count}. {props.optionText}</p>
          <button
          className="button button--link"
           onClick={(e) => {
             props.handleDeleteOption(props.optionText)
          }}
          >
          remove
          </button>
       </div>
    )
 
 export default Option;