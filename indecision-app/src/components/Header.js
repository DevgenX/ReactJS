import React from 'react';

// provides the header part 
    // title and subtitle

const Header = (props) => {
    // check if h2 is provided then render it as h2
    return (
       <div>
          <h1>{props.title}</h1>
          {props.subtitle && <h2>{props.subtitle}</h2>}
       </div>
    )
 }
 
 // allows to set a default value on props
 Header.defaultProps = {
    title:'Indecision App'
 }

 export default Header;