import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from "./welcomeTest"

class App extends Component {
  
  render() {

    const title = <h1>Hello world title</h1>;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          {title}
          {title}
          {new Date().toLocaleTimeString()}
          <Welcome name="Sara" />
        </p> 
      </div>
    );
  }
}

export default App;
