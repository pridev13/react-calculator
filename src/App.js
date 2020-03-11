import React, { Component } from 'react';

import Options from './components/Options/Options';
import InputOptions from './components/InputOptions/InputOptions';
import Display from './components/Display/Display';

import {evaluate} from 'mathjs';

const numberOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "."];
const calcOptions = [" + ", " - ", " / ", " x "];

class App extends Component {

  state = {
    display: "",
    result: ""
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

  clearResult = () => {

    this.setState({
      result: ""
    });

  }

  removeLastInput = () => {

    this.setState((prevState) => ({
      display: prevState.display.slice(0, -1)
    }));

  }

  clearMemory = () => {

    //...
    this.clearInput();
    this.clearResult();

    console.log('Mem cleared');

  }

  doCalc = (input) => {

    let result = 'NaN';

    input = input.replace(" ", "");
    input = input.replace("x", "*");

    try {
      result = evaluate(input);
      
    }catch (error) {
      console.log('Error occured') ;
    }

    return result;

  }

  getResult = () => {

    const result = this.doCalc(this.state.display);

    this.setState({
      display: result.toString(),
      result: this.state.display + " = " + result
    });

    console.log('Result calculated');

  }

  render() {

    return (
      <div className="App clearfix">

        <div className="display-wrapper">
          <Display
            display={this.state.display}
            result={this.state.result}
          />
        </div>

        <div className="special clearfix">
          <Options
            clearInput={this.clearInput}
            delInput={this.removeLastInput}
            memClear={this.clearMemory}
            doCalc={this.getResult}
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
