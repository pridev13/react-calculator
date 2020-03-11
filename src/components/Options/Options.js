import React from 'react';
import Button from '../UI/button';

const options = React.memo((props) => {

  console.log('RNDRNG options');

  return (
    <div className="options">

      <Button
        value="CA"
        clicked={props.memClear}
      />

      <Button
        value="C"
        clicked={props.clearInput}
      />

      <Button
        value="<<"
        clicked={props.delInput}
      />

      <Button
        value="="
        clicked={props.doCalc}
      />

    </div>
  );

});

export default options;