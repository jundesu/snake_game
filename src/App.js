import './App.css';
import React, { useState } from 'react';
function Game() {
  const [score,setScore] = useState(0);

  return (
    <div className="game">
      <ScoreBoard score={score}/>
    </div>
  );
}

function ScoreBoard(props) {
  return (
    <div className="scoreBoard">
      Score<span>{props.score}</span>
    </div>
  );
}

function App() {
  return (
    <div className="app">
      <Game />
    </div>
  );
}

export default App;
