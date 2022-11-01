console.log('App.js is running!');

// JSX - JavaScript XML

 const app = {
   title: 'Indecision App',
   subtitle: 'Some Random Info',
   options: []
 }

 const onFormSubmit = (e) => {
   e.preventDefault()
   // e.target will point to the element that event started on
      // .elements contains a list of the elements indexed by name
   const option = e.target.elements.option.value;

   if (option) {
      app.options.push(option)
      //reset the table button by setting the value into an empty string
      e.target.elements.option.value = '';
      renderIndecisionApp()
   }
 };

 const removeAll = () => {
   app.options = [];
   renderIndecisionApp();
 }


 const appRoot = document.getElementById('app');

 const numbers = [55, 101, 1000]

 const onMakeDecision = () => {
   const randomNum = Math.floor(Math.random() * app.options.length);
   const option = app.options[randomNum];
   alert(option)
 };

 const renderIndecisionApp = () => {
   const template = (
      <div>
         <h1>{app.title}</h1>
         {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
        <p>{app.options.length}</p>
        <button disabled={app.options.length === 0}onClick={onMakeDecision}>What should I do?</button>
        <button onClick={removeAll}>Remove All</button>
         <ol>
           {
            app.options.map((option) => <li key={option}>{option}</li>)
           }
         </ol>
         <form onSubmit={onFormSubmit}>
         <input type="text" name="option"/>
         <button>Add Option</button>
         </form>
      </div>
      );
      ReactDOM.render(template, appRoot);
 }

 renderIndecisionApp()