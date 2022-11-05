import React from 'react';
import AddOption from './AddOption';
import Action from './Action'
import Header from './Header'
import Options from './Options'
import OptionModal from './OptionModal'


// Aggregates all the functionalities of the application
// Handles all the methods used for the application


class IndecisionApp extends React.Component {
   state = {
      options : [],
      selectedOption: undefined
   }

   handleDeleteOptions = () => {
      // delete all the content of the options 
      // use parenthesis to implicity return the setState into 1 liner
      this.setState(() => ({ options : [] }));
   }

   handleDeleteOption = (optionToRemove) => {
      this.setState((prevState) => ({
         // Remove an individual option using filter 
            // option to remove the clicked option
         options : prevState.options.filter((option) => optionToRemove !== option)
      }));
   }
   
   handleCloseOption = () => {
      this.setState(() => ({
         selectedOption: undefined
      }));
   }

   handlePick = () => {
      const RandomNum = Math.floor(Math.random() * this.state.options.length)
      const option = this.state.options[RandomNum];
      this.setState(() => ({
         selectedOption: option
      }));
   }

   handleAddOption = (option) => {
      if(!option) {
         return 'Enter valid value to add item'
      } else if (this.state.options.indexOf(option) > - 1)  {
         return 'This option already exists'
      } 
         this.setState((prevState) => ({
               options: prevState.options.concat([option])
         }));
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

    render() {
       const subtitle = "Put your life in the hands of a computer"
 
       return (
          <div>
          <Header subtitle={subtitle}/>
          <div className="container">
          <Action 
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
          />
          <div className="widget">
          <Options
           options={this.state.options} 
           handleDeleteOptions={this.handleDeleteOptions}
           handleDeleteOption={this.handleDeleteOption}
           />
          <AddOption
           handleAddOption={this.handleAddOption}
          />
          </div>
          </div>
          <OptionModal
          selectedOption={this.state.selectedOption}
          handleCloseOption={this.handleCloseOption}
          />
          </div>
       )
    }
 }

 export default IndecisionApp;