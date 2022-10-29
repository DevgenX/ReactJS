"use strict";

// JSX - Javascript XML 
var template = React.createElement(
  "p",
  null,
  "Does this change"
);
var appRoot = document.getElementById("app");

reactDOM.render(template, appRoot);
