import React, { Component } from 'react';

class RightPanel extends Component {  
  render() {
    return (
      <div id="right-panel" className={this.props.className}>
        {this.props.children}
      </div>
    );
  }
}

export default RightPanel;
