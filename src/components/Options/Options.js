import React from 'react';
import KeyboardEventHandler from 'react-keyboard-event-handler';
import Button from '../UI/button';

const options = React.memo((props) => {

  return (
    <div className="options">

      <Button
        value="CA"
        clicked={props.memClear}
      />
      <KeyboardEventHandler
        handleKeys={['shift+backspace']}
        onKeyEvent={() => { props.memClear() }}
      />

      <Button
        value="C"
        clicked={props.clearInput}
      />
      <KeyboardEventHandler
        handleKeys={['esc', 'del']}
        onKeyEvent={() => { props.clearInput() }}
      />

      <Button
        value="<<"
        clicked={props.delInput}
      />
      <KeyboardEventHandler
        handleKeys={['backspace']}
        onKeyEvent={() => { props.delInput() }}
      />

      <Button
        value="="
        clicked={props.doCalc}
      />
      <KeyboardEventHandler
        handleKeys={['enter', '=']}
        onKeyEvent={() => { props.doCalc() }}
      />

    </div>
  );

});

export default options;