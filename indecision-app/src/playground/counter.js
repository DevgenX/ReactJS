class Counter extends React.Component {
  constructor(props) { 
    super(props)
    this.handleAddOne = this.handleAddOne.bind(this)
    this.handleMinusOne = this.handleMinusOne.bind(this)
    this.handleReset = this.handleReset.bind(this)
    this.state = {
      count: 0
    };
  }
  handleAddOne() {
   this.setState((prevState) => {
      return {
        count: prevState.count + 1
      }
    })
  }
  handleMinusOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1
      }
    })
  }

  handleReset() {
    this.setState((prevState) => {
      return {
        count: 0
      }
  })
}

componentDidMount() {
  const stringCount = localStorage.getItem('counter')
  const counter = parseInt(stringCount, 10)

  if (!isNaN(counter)) {
    this.setState(() => ({ count: counter}))
}
  
}
componentDidUpdate(prevState) {
  if (this.state.count !== prevState.count) {
    // save the data into the local storage every single time it changes
     // you can choose any key
    localStorage.setItem('counter', this.state.count)
  }
}

  render() {

    return (
      <div>
      <h1>Count: {this.state.count} </h1>
      <button onClick={this.handleAddOne}>+1</button>
      <button onClick={this.handleMinusOne}>-1</button>
      <button onClick={this.handleReset}>reset</button>
      </div>
    )

  }
}


ReactDOM.render(<Counter/>, document.getElementById('app'))


// let count = 0;
//  const addOne = () => {
//    count++
//    renderCounterApp()
//  };

//  const minusOne = () => {
//    count--
//    renderCounterApp()
//  }

//  const reset = () => {
//    count = 0;
//    renderCounterApp()
//  }

//  const getLocation = (location) => location ? <p>Location: {location}</p> : ''
 

//  const templateTwo = (
//    <div>
//      <h1>Count: {count}</h1>
//      <button onClick={addOne}>+1</button>
//      <button onClick={minusOne}>-1</button>
//      <button onClick={reset}>reset</button>
//    </div>
//  );

// const appRoot = document.getElementById('app');

// ReactDOM.render(templateTwo, appRoot);

// const renderCounterApp = () => {

//  const templateTwo = (
//    <div>
//      <h1>Count: {count}</h1>
//      <button onClick={addOne}>+1</button>
//      <button onClick={minusOne}>-1</button>
//      <button onClick={reset}>reset</button>
//    </div>
//  );

//  ReactDOM.render(templateTwo, appRoot);
// }

// renderCounterApp();