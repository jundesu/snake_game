import React from 'react';

function StartButton(props) {
  return (
    <div className={props.displayStartButton}>
      <button type="button" className="startButton" onClick={props.startGame}>
        start
      </button>
    </div>
  );
}

export default StartButton;