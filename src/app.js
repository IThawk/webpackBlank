// var hello = require("./hello.js");
// document.getElementById("root").append(hello());


// 主入口文件
import React from "react";
import ReactDOM from "react-dom";
import Hello from "./hello";
import "./css/hello.css";
import Myimg from "./images/j1.jpg";

class App extends React.Component{
  render(){
    return(
      <div>
        <img src={ Myimg } />
        <Hello />
      </div>
    )
  }
}

ReactDOM.render(<App />,document.getElementById("root"))
