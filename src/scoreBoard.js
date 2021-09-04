import React from 'react';

function ScoreBoard(props) {
  return (
    <div className="scoreBoard">
      Score
      <span>{props.score}</span>
    </div>
  );
}

export default ScoreBoard;
