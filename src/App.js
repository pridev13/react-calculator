import React, { Component } from 'react';

import Options from './components/Options/Options';
import InputOptions from './components/InputOptions/InputOptions';
import Display from './components/Display/Display';

import { evaluate } from 'mathjs';

const numberOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "."];
const calcOptions = [" + ", " - ", " / ", " * "];

class App extends Component {

  state = {
    display: "",
    result: ""
  }

  sanitizeInput = (current, input) => {

    let output = "";

    const currentIsEmpty = (
      current === ''
      || current === 'NaN'
      || current === 0
      || current === "0");

    const hasDot = current.split(' ').slice(-1).toString().search(/\./i) > -1;

    const lastInput = current.trim().replace(" ", "").slice(-1);
    const lastIsNum = !isNaN(parseFloat(lastInput)) && isFinite(lastInput);
    const lastIsDot = lastIsNum ? false : lastInput.trim() === '.';

    const inputIsNum = !isNaN(parseFloat(input)) && isFinite(input);
    const inputIsMinus = inputIsNum ? false : input.trim() === '-';
    const inputIsDot = inputIsNum ? false : input.trim() === '.';

    if (currentIsEmpty) {

      if (inputIsNum || inputIsMinus) output = input;
      else if (inputIsDot) output = "0.";
      else output = current; //input ignored

    }
    else if (inputIsDot && hasDot) {
      output = current; //input ignored
    }
    else if (lastIsNum) {
      output = current + "" + input; //all possible
    }
    else if (lastIsDot) {

      if (inputIsNum) output = current + "" + input;
      else output = current; //input ignored

    }
    else if (inputIsNum || inputIsMinus) {
      output = current + "" + input;
    }
    else {
      output = current; //input ignored
    }

    return output.toString();

  }

  addToInput = (input) => {

    this.setState((prevState) => ({
      display: this.sanitizeInput(prevState.display, input)
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

    this.setState((prevState) => {

      const newDisplay =
        prevState.display.slice(-1) === ' '
          ? prevState.display.trim().slice(0, -1).trim()
          : prevState.display.slice(0, -1)

      return {
        display: newDisplay
      }

    });

  }

  clearMemory = () => {

    //...
    this.clearInput();
    this.clearResult();

    console.log('Mem cleared');

  }

  doCalc = (input) => {

    const inputIsEmpty = (
      input === ''
      || input === 'NaN'
      || input === 0
      || input === "0");

    const elements = input.split(' ');
    const lastIsNum = !isNaN(parseFloat(elements.slice(-1))) && isFinite(elements.slice(-1));
    const lastIsDot = input.toString().trim().slice(-1) === '.';

    if (inputIsEmpty || elements.length < 3 || !lastIsNum || lastIsDot) {
      return false;
    }

    let result = 'NaN';

    input = input.replace(" ", "");
    input = input.replace("x", "*");

    try {
      result = evaluate(input);
    } catch (error) {
      console.log('Error occured');
    }

    return result;

  }

  getResult = () => {

    const result = this.doCalc(this.state.display);

    let newDisplay = this.state.display;
    let newResult = this.state.result;

    if (result !== false) {
      newDisplay = result.toString();
      newResult = this.state.display + " = " + result;
    }

    this.setState({
      display: newDisplay,
      result: newResult
    });

    console.log('Result calculated');

  }

  render() {

    return (

      <div className="App">

        <div className="display-wrapper">
          <Display
            display={this.state.display}
            result={this.state.result}
          />
        </div>

        <div className="special">
          <Options
            clearInput={this.clearInput}
            delInput={this.removeLastInput}
            memClear={this.clearMemory}
            doCalc={this.getResult}
          />
        </div>

        <div className="numbers">
          <InputOptions
            options={numberOptions}
            addInput={this.addToInput}
          />
        </div>

        <div className="calc">
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
