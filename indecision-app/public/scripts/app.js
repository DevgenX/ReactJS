'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndecisionApp = function (_React$Component) {
   _inherits(IndecisionApp, _React$Component);

   function IndecisionApp(props) {
      _classCallCheck(this, IndecisionApp);

      var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

      _this.handleDeleteOptions = _this.handleDeleteOptions.bind(_this);
      _this.handleAddOption = _this.handleAddOption.bind(_this);
      _this.handlePick = _this.handlePick.bind(_this);
      _this.handleDeleteOption = _this.handleDeleteOption.bind(_this);
      _this.state = {
         options: []
      };
      return _this;
   }

   _createClass(IndecisionApp, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
         // try and catch for bad data 
         try {
            var json = localStorage.getItem('options');
            var options = JSON.parse(json);

            if (options) {
               // set the data into the current data in the local storage
               this.setState(function () {
                  return { options: options };
               });
            }
         } catch (e) {
            // Do nothing at all if the data is invalid
         }
      }
   }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate(prevProps, prevState) {
         if (prevState.options.length !== this.state.options.length) {
            var json = JSON.stringify(this.state.options);
            // save the data into the local storage every single time it changes
            // you can choose any key
            localStorage.setItem('options', json);
         }
      }
   }, {
      key: 'handleDeleteOptions',
      value: function handleDeleteOptions() {
         // delete all the content of the options 
         // use parenthesis to implicity return the setState into 1 liner
         this.setState(function () {
            return { options: [] };
         });
      }
   }, {
      key: 'handleDeleteOption',
      value: function handleDeleteOption(optionToRemove) {
         this.setState(function (prevState) {
            return {
               // Remove an individual option using filter 
               // option to remove the clicked option
               options: prevState.options.filter(function (option) {
                  return optionToRemove !== option;
               })
            };
         });
      }
   }, {
      key: 'handlePick',
      value: function handlePick() {
         var RandomNum = Math.floor(Math.random() * this.state.options.length);
         var option = this.state.options[RandomNum];
         alert(option);
      }
   }, {
      key: 'handleAddOption',
      value: function handleAddOption(option) {
         if (!option) {
            return 'Enter valid value to add item';
         } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists';
         }
         this.setState(function (prevState) {
            return {
               options: prevState.options.concat([option])
            };
         });
      }
   }, {
      key: 'render',
      value: function render() {
         var title = 'Indecision App';
         var subtitle = "Put your life in the hands of a computer";

         return React.createElement(
            'div',
            null,
            React.createElement(Header, { subtitle: subtitle }),
            React.createElement(Action, {
               hasOptions: this.state.options.length > 0,
               handlePick: this.handlePick
            }),
            React.createElement(Options, {
               options: this.state.options,
               handleDeleteOptions: this.handleDeleteOptions,
               handleDeleteOption: this.handleDeleteOption
            }),
            React.createElement(AddOption, {
               handleAddOption: this.handleAddOption
            })
         );
      }
   }]);

   return IndecisionApp;
}(React.Component);

var Header = function Header(props) {
   // check if h2 is provided then render it as h2
   return React.createElement(
      'div',
      null,
      React.createElement(
         'h1',
         null,
         props.title
      ),
      props.subtitle && React.createElement(
         'h2',
         null,
         props.subtitle
      )
   );
};

// allows to set a default value on props
Header.defaultProps = {
   title: 'Indecision App'

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
};var Action = function Action(props) {
   return React.createElement(
      'div',
      null,
      React.createElement(
         'button',
         {
            onClick: props.handlePick,
            disabled: !props.hasOptions
         },
         'What should I do?'
      )
   );
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


var Options = function Options(props) {
   return React.createElement(
      'div',
      null,
      React.createElement(
         'button',
         { onClick: props.handleDeleteOptions },
         'Remove All'
      ),
      props.options.length === 0 && React.createElement(
         'p',
         null,
         'Please add an option to get started!'
      ),

      // iterate the options input and render them based on the loop
      props.options.map(function (option) {
         return React.createElement(Option, {
            key: option,
            optionText: option,
            handleDeleteOption: props.handleDeleteOption
         });
      })
   );
};

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

var Option = function Option(props) {
   return React.createElement(
      'div',
      null,
      props.optionText,
      React.createElement(
         'button',
         { onClick: function onClick(e) {
               props.handleDeleteOption(props.optionText);
            }
         },
         'remove'
      )
   );
};

// class Option extends React.Component { 
//    render() {
//       return (
//       <div>
//          {this.props.optionText}
//       </div>
//       )
//    }
// }


var AddOption = function (_React$Component2) {
   _inherits(AddOption, _React$Component2);

   function AddOption(props) {
      _classCallCheck(this, AddOption);

      var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

      _this2.handleAddOption = _this2.handleAddOption.bind(_this2);
      _this2.state = {
         error: undefined
      };
      return _this2;
   }

   _createClass(AddOption, [{
      key: 'handleAddOption',
      value: function handleAddOption(e) {

         e.preventDefault();

         var option = e.target.elements.option.value.trim();
         var error = this.props.handleAddOption(option);

         this.setState(function () {
            return { error: error //error: error 
            };
         });
         // clear the input bar if there is no error
         if (!error) {
            e.target.elements.option.value = '';
         }
      }
   }, {
      key: 'render',
      value: function render() {
         return React.createElement(
            'div',
            null,
            this.state.error && React.createElement(
               'p',
               null,
               this.state.error
            ),
            React.createElement(
               'form',
               { onSubmit: this.handleAddOption },
               React.createElement('input', { type: 'text', name: 'option', placeholder: 'Input options' }),
               React.createElement(
                  'button',
                  null,
                  'Add Option'
               )
            )
         );
      }
   }]);

   return AddOption;
}(React.Component);

//stateless function components
// const User = (props) => {
//    return (
//       <div>
//       <p>Name: {props.name}</p>
//       <p>Age: {props.age}</p>
//       </div>
//    );
// };


ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById('app'));
