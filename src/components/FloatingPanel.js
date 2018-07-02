import React, { Component } from 'react';

class FloatingPanel extends Component {
  render() {
    return (
      <div id="floatingPanel" className="rsBorder" style={{ backgroundImage: `url(${this.props.location.image})`}}>
      </div>
    );
  }
}

export default FloatingPanel;
