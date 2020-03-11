import React from 'react';

const inputOption = (props) => {

  console.log('RNDRNG inputOption: ' + props.value);

  return (
    <div
      className="button"
      onClick={props.clicked}
    >
      {props.value}
    </div>
  );

}

export default inputOption;