import React from 'react';

// provides the header part 
    // title and subtitle

const Header = (props) => (
    // check if h2 is provided then render it as h2  (
   <div className="header">
       <div className="container">
          <h1 className="header__title">{props.title}</h1>
          {props.subtitle && <h2 className="header__subtitle">{props.subtitle}</h2>}
       </div>
    </div>
    )
 
 // allows to set a default value on props
 Header.defaultProps = {
    title:'Indecision App'
 }

 export default Header;