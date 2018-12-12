import React, { Component } from 'react';
import logo from './logo.svg';
import {sum, subtract, multiply, divide} from './scripts/math';
import './App.css';
import MyComponent from './components/MyComponent.js';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div>
          <p>5 + 5 = {sum(5,5)}</p>
          <p>5 - 5 = {subtract(5,5)}</p>
          <p>5 * 5 = {multiply(5,5)}</p>
          <p>5 / 5 = {divide(5,5)}</p>
        </div>
        <MyComponent />
      </div>
    );
  }
}

export default App;
