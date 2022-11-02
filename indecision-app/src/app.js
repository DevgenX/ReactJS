class IndecisionApp extends React.Component {
   constructor(props){
      super(props);
      this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
      this.handleAddOption = this.handleAddOption.bind(this)
      this.handlePick = this.handlePick.bind(this)
      this.handleDeleteOption = this.handleDeleteOption.bind(this)
      this.state ={
         options: []
      }
   }

   componentDidMount() {
      // try and catch for bad data 
      try {
         const json = localStorage.getItem('options');
         const options = JSON.parse(json);
   
         if(options) {
            // set the data into the current data in the local storage
            this.setState(() =>({ options: options  }))
         }
      } catch (e) {
         // Do nothing at all if the data is invalid
      }
      
   }
   
   componentDidUpdate(prevProps, prevState) {
      if (prevState.options.length !== this.state.options.length) {
        const json = JSON.stringify(this.state.options)
        // save the data into the local storage every single time it changes
         // you can choose any key
        localStorage.setItem('options', json)
      }
   }

   handleDeleteOptions() {
      // delete all the content of the options 
      // use parenthesis to implicity return the setState into 1 liner
      this.setState(() => ({ options : [] }));
   }

   handleDeleteOption(optionToRemove) {
      this.setState((prevState) => ({
         // Remove an individual option using filter 
            // option to remove the clicked option
         options : prevState.options.filter((option) => optionToRemove !== option)
      }));
   }

   handlePick() {
      const RandomNum = Math.floor(Math.random() * this.state.options.length)
      const option = this.state.options[RandomNum];
      alert(option)
   }

   handleAddOption(option) {
      if(!option) {
         return 'Enter valid value to add item'
      } else if (this.state.options.indexOf(option) > - 1)  {
         return 'This option already exists'
      } 
         this.setState((prevState) => ({
               options: prevState.options.concat([option])
         }));
   }


   render() {
      const title = 'Indecision App'
      const subtitle = "Put your life in the hands of a computer"

      return (
         <div>
         <Header subtitle={subtitle}/>
         <Action 
         hasOptions={this.state.options.length > 0}
         handlePick={this.handlePick}
         />
         <Options
          options={this.state.options} 
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
          />
         <AddOption
          handleAddOption={this.handleAddOption}
         />
         </div>
      )
   }
}



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



// class Header extends React.Component {
//    render() {
//       return (
//          <div>
//             <h1>{this.props.title}</h1>
//             <h2>{this.props.subtitle}</h2>
//          </div>
//       )
//    }
// }

// Stateless Function Component 
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

// class Action extends React.Component {
//    render() {
//       return (
//          <div>
//             <button
//              onClick={this.props.handlePick}
//             disabled={!this.props.hasOptions}
//             >
//             What should I do?
//             </button>
//          </div>
//       )
//    }
// }


const Options = (props) => {
   return (
      <div>
      <button onClick={props.handleDeleteOptions}>Remove All</button>
      {props.options.length === 0 && <p>Please add an option to get started!</p>}
      {
         // iterate the options input and render them based on the loop
         props.options.map((option) => ( 
            <Option
             key={option} 
             optionText={option}
             handleDeleteOption={props.handleDeleteOption}
             />
             ))
      }
      </div>
   )

}

// class Options extends React.Component {
//    render() {
//       return (
//          <div>
//          <button onClick={this.props.handleDeleteOptions}>Remove All</button>
//          {
//             this.props.options.map((option) => <Option key={option} optionText={option}/>)
//          }
//          </div>
//       )
//    }
// }

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

// class Option extends React.Component { 
//    render() {
//       return (
//       <div>
//          {this.props.optionText}
//       </div>
//       )
//    }
// }


class AddOption extends React.Component {
   constructor(props) {
      super(props)
      this.handleAddOption = this.handleAddOption.bind(this)
      this.state = {
         error: undefined
      };
   }
   handleAddOption(e) {

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

//stateless function components
// const User = (props) => {
//    return (
//       <div>
//       <p>Name: {props.name}</p>
//       <p>Age: {props.age}</p>
//       </div>
//    );
// };


ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));
