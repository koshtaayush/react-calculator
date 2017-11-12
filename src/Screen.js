import React, { Component } from 'react';
import { render } from 'react-dom';
import ScreenRow from './ScreenRow.js';

export default class Screen extends Component {
  render(props) {
    return (
      <div>
        <ScreenRow val={this.props.val} />
        <ScreenRow val={this.props.res} />
      </div>
    )
  }
}