import React from 'react';

function ScoreBoard({ score }) {
  return (
    <div className="scoreBoard">
      Score
      <span>{score}</span>
    </div>
  );
}

export default ScoreBoard;
