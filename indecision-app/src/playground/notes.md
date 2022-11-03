#### Stateless Function Components

- are faster than the class based components

- A lot easier to read and write

- Much easier to test

- Use it if you can

- If you need to use state, you can use class-based components but if only render, use stateless functions

// stateless function components
// const User = (props) => {
// return (
// <div>
// <p>Name: {props.name}</p>
// <p>Age: {props.age}</p>
// </div>
// );
// };

### Props and State

- They are both Objects

- Props are used to access methods and aren't mutable

- State are used mostly in object's properties, and can be mutated by using setState method.

JSON.stringify converts the data into a string
JSON.parse converts the data into an object so you can access them into a key-value pair

### WEBPACK

//default export

import subtract, { square, add } from './utils';

console.log('utils.js is running')

//export { square, add };

export const square = (x) => x \* x;

export const add = (a ,b) => a + b;

### import, export and default export

// import subtract, { square, add } from './utils';
// import isSenior, { isAdult , canDrink } from './person.js'

// console.log("app.js is running")
// console.log(square(4));
// console.log(add(100,23));
// console.log(subtract(100, 81)) // should log :19
// console.log(isSenior(65)) // should log : true;
// // console.log(isAdult(18)) // should return false;
// // console.log(canDrink(21)) // should return true;

#### Old syntax vs New Syntax

const oldSyntax = new OldSyntax();
console.log(oldSyntax)

class NewSyntax {
name = 'Jen';
getGreeting = () => {
return `Hi, my name is ${this.name}`
}
}

const newSyntax = new NewSyntax();
const newGetGreeting = newSyntax.getGreeting;
console.log(newGetGreeting())

#### Passing Children to component

const Layout = (props) => {
return (
<div>
<p>header</p>
{props.children}
<p>footer</p>
</div>
);
}

ReactDOM.render(<IndecisionApp content={Layout}/>, document.getElementById('app'));

// passed JSX in a component
