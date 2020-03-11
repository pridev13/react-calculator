import React from 'react';

const display = (props) => {

  console.log('RNDRNG display');

  return (
    <div
      className="display"
    >
      {props.display}
    </div>
  );

}

export default display;