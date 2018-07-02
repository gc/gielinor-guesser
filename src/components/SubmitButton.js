import React, { Component } from 'react';
import ButtonImage from "../assets/button.png";

class SubmitButton extends Component {
  render() {
    return (
      <div id="SubmitButton">
        <img onClick={this.props.showLine} src={ButtonImage} />
      </div>
    );
  }
}

export default SubmitButton;
