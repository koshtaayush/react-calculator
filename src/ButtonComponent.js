import React, { Component } from 'react';
import { render } from 'react-dom';

export default class ButtonComponent extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      inputScreen: '',
      outputScreen: ''
    });
  }

  render() {
    let temp = this.props.value;
    console.log(temp);
    return (
      <div>
        <input className={(temp == '=') ? 'button-others' : 'button-option'} value={this.props.value} onClick={this.props.handleClick} readOnly />
      </div>
    )
  }
}