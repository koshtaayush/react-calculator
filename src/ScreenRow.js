import React, { Component } from 'react';
import { render } from 'react-dom';

export default class ScreenRow extends Component {
  render() {
    return (
      <div>
        <input value={this.props.val} className="screen-option" type="text" readOnly />
      </div>
    )
  }
}