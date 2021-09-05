import React from 'react';

function StartButton({ displayStartButton, startGame }) {
  return (
    <div className={displayStartButton}>
      <button type="button" className="startButton" onClick={startGame}>
        start
      </button>
    </div>
  );
}

export default StartButton;
