import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import Screen from './Screen.js';
import ButtonComponent from './ButtonComponent.js'

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
      inputScreen: '',
      outputScreen: ''
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(ev) {
    var ent = ev.target.value;
    if (ent == 'C') {
      this.setState({
        inputScreen: '',
        outputScreen: ''
      })
    } else if (ent == '=') {
      console.log("Equals sign");
      let exp = this.state.inputScreen;
      console.log("Eval : " + eval(exp))
      let res = eval(exp);
      this.setState({
        outputScreen: res
      });
    } else {
      let inputVal = this.state.inputScreen;
      inputVal = inputVal + ev.target.value;
      this.setState({
        inputScreen: inputVal
      });
    }
  }

  render() {
    return (
      <div>
        <Screen val={this.state.inputScreen} res={this.state.outputScreen} />

        <div className="layout">

          <div className="button-row">
            <div className="button-option"><ButtonComponent handleClick={this.handleClick} label={'7'} value={'7'} /></div>
            <div className="button-option"><ButtonComponent handleClick={this.handleClick} label={'8'} value={'8'} /></div>
            <div className="button-option"><ButtonComponent handleClick={this.handleClick} label={'9'} value={'9'} /></div>
            <div className="button-option"><ButtonComponent handleClick={this.handleClick} label={'/'} value={'/'} /></div>
          </div>

          <div className="button-row">
            <div className="button-option"><ButtonComponent handleClick={this.handleClick} label={'4'} value={'4'} /></div>
            <div className="button-option"><ButtonComponent handleClick={this.handleClick} label={'5'} value={'5'} /></div>
            <div className="button-option"><ButtonComponent handleClick={this.handleClick} label={'6'} value={'6'} /></div>
            <div className="button-option"><ButtonComponent handleClick={this.handleClick} label={'*'} value={'*'} /></div>
          </div>

          <div className="button-row">
            <div className="button-option"><ButtonComponent handleClick={this.handleClick} label={'1'} value={'1'} /></div>
            <div className="button-option"><ButtonComponent handleClick={this.handleClick} label={'2'} value={'2'} /></div>
            <div className="button-option"><ButtonComponent handleClick={this.handleClick} label={'3'} value={'3'} /></div>
            <div className="button-option"><ButtonComponent handleClick={this.handleClick} label={'-'} value={'-'} /></div>
          </div>

          <div className="button-row">
            <div className="button-option"><ButtonComponent handleClick={this.handleClick} label={'.'} value={'.'} /></div>
            <div className="button-option"><ButtonComponent handleClick={this.handleClick} label={'0'} value={'0'} /></div>
            <div className="button-option"><ButtonComponent handleClick={this.handleClick} label={'C'} value={'C'} /></div>
            <div className="button-option"><ButtonComponent handleClick={this.handleClick} label={'+'} value={'+'} /></div>
          </div>

          <div className="button-row">
            <div className="button-others"><ButtonComponent handleClick={this.handleClick} label={'='} value={'='} /></div>
          </div>

        </div>

      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
