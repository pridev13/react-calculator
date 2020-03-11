import React from 'react';
import Button from '../UI/button';

const inputOptions = React.memo((props) => {

  console.log('RNDRNG inputOptions');

  return (
    <div
      className="options"
    >
      {props.options.map((el) => (
        <Button
          key={el}
          value={el}
          clicked={() => {props.addInput(el)}}
        />
      ))}
    </div>
  );

});

export default inputOptions;