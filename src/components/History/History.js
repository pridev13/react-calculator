import React from 'react';
import KeyboardEventHandler from 'react-keyboard-event-handler';

const history = (props) => {

  const closeHistory = () => {
    document.querySelector('.history-wrapper').classList.add('closed');
  }

  return (
    <div className="history-wrapper closed">

      <KeyboardEventHandler
        handleKeys={['esc']}
        onKeyEvent={() => { closeHistory() }}
      />

      <div
        className="toggle"
        onClick={() => {
          document.querySelector('.history-wrapper').classList.toggle('closed');
        }}
      >
        <span className="arrow">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </span>
      </div>

      <div className="history">

        {props.history.map((el, id) => (

          <div
            key={id}
            className="history-item"
            onClick={() => {
              props.clicked(id);
              closeHistory();
            }}
          >
            {el.input} = {el.result}
          </div>

        ))}

      </div>
    </div>
  );

}

export default history;