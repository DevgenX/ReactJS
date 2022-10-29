let count = 0;
 const addOne = () => {
   count++
   renderCounterApp()
 };

 const minusOne = () => {
   count--
   renderCounterApp()
 }

 const reset = () => {
   count = 0;
   renderCounterApp()
 }

 const getLocation = (location) => location ? <p>Location: {location}</p> : ''
 

 const templateTwo = (
   <div>
     <h1>Count: {count}</h1>
     <button onClick={addOne}>+1</button>
     <button onClick={minusOne}>-1</button>
     <button onClick={reset}>reset</button>
   </div>
 );

const appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);

const renderCounterApp = () => {

 const templateTwo = (
   <div>
     <h1>Count: {count}</h1>
     <button onClick={addOne}>+1</button>
     <button onClick={minusOne}>-1</button>
     <button onClick={reset}>reset</button>
   </div>
 );

 ReactDOM.render(templateTwo, appRoot);
}

renderCounterApp();