import React from 'react';
import ReactDOM from 'react-dom';
import "./App.css"

function FacebookLoginPage(){
  return ( 
    React.createElement("div", {classname:"Page"}, null,
    React.createElement("h1", {className:"title"}, " Facebook"),
    React.createElement("div", {className: "facebook-login"},
    React.createElement("h2", null, "Welcome to facebook"),
      React.createElement("form", null, 
      React.createElement("input", {type:"text", name:"email", placeholder:"Email"}),
      React.createElement("br"),
      React.createElement("input", {type:"password", name:"password", placeholder:"Password"}),
      React.createElement("br"),
      React.createElement("button", {type:"submit", className:"button"}, "Log In"),
      React.createElement("p", null, "Forgot account? · Sign up for Facebook")
      )
    )))

}

ReactDOM.render(React.createElement(FacebookLoginPage), document.getElementById('root'));
