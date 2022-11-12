// install -> import --> use 
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter';
import { addExpense } from './actions/expenses'
import configureStore from './store/configureStore';
import { setTextFilter } from './actions/filters'; 
import getVisibleExpenses from './selectors/expenses'


import 'normalize.css/normalize.css';
import './styles/styles.scss' 

const store = configureStore();

store.dispatch(addExpense( {description: 'Water bill', amount: 4500 }))
store.dispatch(addExpense( {description: 'Gas bill', createdAt: 1000 }))
store.dispatch(addExpense( {description: 'Rent bill', amount: 109500 }))



const state = store.getState()
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);



const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)


ReactDOM.render(jsx, document.getElementById('app'));
 

























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

 // class Option extends React.Component { 
 //    render() {
 //       return (
 //       <div>
 //          {this.props.optionText}
 //       </div>
 //       )
 //    }
 // }
 
 
