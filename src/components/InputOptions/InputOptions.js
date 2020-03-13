import React from 'react';
import KeyboardEventHandler from 'react-keyboard-event-handler';
import Button from '../UI/button';

const inputOptions = React.memo((props) => {

  return (
    <div
      className="options"
    >
      {props.options.map((el) => (
        <React.Fragment
          key={el}
        >

          <Button
            value={el}
            clicked={() => { props.addInput(el) }}
          />
          <KeyboardEventHandler
            handleKeys={[el.toString()]}
            onKeyEvent={() => { props.addInput(el) }}
          />

        </React.Fragment>
      ))}
    </div>
  );

});

export default inputOptions;