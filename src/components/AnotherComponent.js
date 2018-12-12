import React, { Component } from 'react';

class AnotherComponent extends Component {
  
  render() {
    return (
      <div className="another-component">
        <p>Another component here</p>
        <p>Name: {this.props.data.name}</p>
        <p>E-mail: {this.props.data.email}</p>
      </div>
    );
  }
}

export default AnotherComponent;
