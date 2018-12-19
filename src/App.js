import React, { Component } from 'react';
import {sum, subtract, multiply, divide} from './scripts/math';
import './App.css';
import MyComponent from './components/MyComponent.js';
import Navigation from './components/Navigation.js';
import LeftPanel from './components/LeftPanel.js';
import RightPanel from './components/RightPanel.js';
import CenterComponent from './components/CenterComponent.js';
import Footer from './components/Footer.js';

export default class App extends Component {
  constructor(props)  {
    super(props);
    this.state = {
      isVisible: false,
    }
  }

  toggleVisibility() {
    console.log("toggleVisibility");
    this.setState({
      isVisible: !this.state.isVisible
    })
  }

  render() {
    return (
      <div className="App">
        <Navigation />
        <div className="container-fluid">
          <div className="row">
            <LeftPanel className="col-sm-4"/>
            <RightPanel className="col-sm-8">
              <p>5 + 5 = {sum(5,5)}</p>
              <p>5 - 5 = {subtract(5,5)}</p>
              <p>5 * 5 = {multiply(5,5)}</p>
              <p>5 / 5 = {divide(5,5)}</p>
              <p>MORE TEXT</p>
              <MyComponent />
              <button 
                id="visibility-button"
                onClick={() => this.toggleVisibility()}>test button</button>
            </RightPanel>
          </div>
        </div>
        {this.state.isVisible ? <CenterComponent /> : ''}
        <Footer />
      </div>
    );
  }
}
