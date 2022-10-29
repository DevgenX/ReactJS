'use strict';

console.log('App.js is running!');

// JSX - JavaScript XML

var app = {
  title: 'Indecision App',
  subtitle: 'Some Random Info',
  options: []
};

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();
  // e.target will point to the element that event started on
  // .elements contains a list of the elements indexed by name
  var option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    //reset the table button by setting the value into an empty string
    e.target.elements.option.value = '';
    renderIndecisionApp();
  }
};

var removeAll = function removeAll() {
  app.options = [];
  renderIndecisionApp();
};

var appRoot = document.getElementById('app');

var numbers = [55, 101, 1000];

var onMakeDecision = function onMakeDecision() {
  var randomNum = Math.floor(Math.random() * app.options.length);
  var option = app.options[randomNum];
  alert(option);
};

var renderIndecisionApp = function renderIndecisionApp() {
  var template = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      app.title
    ),
    app.subtitle && React.createElement(
      'p',
      null,
      app.subtitle
    ),
    React.createElement(
      'p',
      null,
      app.options.length > 0 ? 'Here are your options' : 'No options'
    ),
    React.createElement(
      'p',
      null,
      app.options.length
    ),
    React.createElement(
      'button',
      { disabled: app.options.length === 0, onClick: onMakeDecision },
      'What should I do?'
    ),
    React.createElement(
      'button',
      { onClick: removeAll },
      'Remove All'
    ),
    React.createElement(
      'ol',
      null,
      app.options.map(function (option) {
        return React.createElement(
          'li',
          { key: option },
          option
        );
      })
    ),
    React.createElement(
      'form',
      { onSubmit: onFormSubmit },
      React.createElement('input', { type: 'text', name: 'option' }),
      React.createElement(
        'button',
        null,
        'Add Option'
      )
    )
  );
  ReactDOM.render(template, appRoot);
};

renderIndecisionApp();
