import React, { Component } from 'react';

class FloatingControls extends Component {
  onClick(event) {
    event.stopPropagation();
    console.log('Clicked!')
  }
  render() {
    const { locImg } = this.props;
    return (
      <div id="floatingControls" className="rsBorder leaflet-bottom" style={locImg && { backgroundImage: `url(${locImg})`}}>
        <h3 style={{color: 'yellow', textAlign: 'center'}}>Click here to submit your guess!</h3>
        <button style={{margin: '0 auto', display: 'block'}} onClick={this.onClick}>Submit</button>
      </div>
    );
  }
}

export default FloatingControls;
