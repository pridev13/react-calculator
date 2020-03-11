import React, { Component } from 'react';

import Options from './components/Options/Options';
import InputOptions from './components/InputOptions/InputOptions';
import Display from './components/Display/Display';

const numberOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const calcOptions = ["+", "-", "/", "x"];

class App extends Component {

  state = {
    display: ""
  }

  addToInput = (input) => {

    this.setState((prevState) => ({
      display: prevState.display + "" + input
    }));

  }

  clearInput = () => {

    this.setState({
      display: ""
    });

  }

  removeLastInput = () => {

    this.setState((prevState) => ({
      display: prevState.display.slice(0, -1)
    }));

  }

  clearMemory = () => {
    //...
    console.log('Mem cleared');
  }

  doCalc = () => {
    //...
    console.log('Result calculated');
  }

  render() {

    return (
      <div className="App clearfix">

        <div className="display-wrapper">
          <Display display={this.state.display} />
        </div>

        <div className="special clearfix">
          <Options
            clearInput={this.clearInput}
            delInput={this.removeLastInput}
            memClear={this.clearMemory}
            doCalc={this.doCalc}
          />
        </div>

        <div className="numbers clearfix">
          <InputOptions
            options={numberOptions}
            addInput={this.addToInput}
          />
        </div>

        <div className="calc clearfix">
          <InputOptions
            options={calcOptions}
            addInput={this.addToInput}
          />
        </div>

      </div>
    );

  }

}

export default App;
