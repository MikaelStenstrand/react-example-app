import React, { Component } from 'react';
import AnotherComponent from './AnotherComponent.js'

const data = {
  name: 'my name',
  email: 'myemail@mail.com'
}; 

export default class MyComponent extends Component {  
  render() {
    return (
      <div className="my-component">
        <div>
          <h1>My Component</h1>
          <p>This is the long text of the my component...</p>
        </div>
        <AnotherComponent data={data} />
      </div>
    );
  }
}

