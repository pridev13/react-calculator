import React from 'react';

const inputOption = (props) => {

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