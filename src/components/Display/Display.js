import React from 'react';

const display = (props) => {

  console.log('RNDRNG display');

  return (
    <React.Fragment>
      <div className="input">
        {props.display}
      </div>
      <div className="result">
        {props.result}
      </div>
    </React.Fragment>
  );

}

export default display;