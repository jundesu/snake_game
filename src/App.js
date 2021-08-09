import './App.css';
import React, { useState } from 'react';

const width = 15;
const height = 15;

function Game() {
  const [score,setScore] = useState(0);

  return (
    <div className="game">
      <ScoreBoard score={score}/>
      <Board />
    </div>
  );
}

function ScoreBoard(props) {
  return (
    <div className="scoreBoard">
      Score
      <span>{props.score}</span>
    </div>
  );
}

function Board() {
  const columnArr = (new Array(width)).fill(null);
  for(let i = 0; i < columnArr.length; i++) {
    const rowArr = (new Array(height)).fill(null);
    columnArr[i] = rowArr;
  }

  return (
    <div className="board">
     {
       columnArr.map((column, x) => {
        return (
          column.map((cell, y) => {
            return (
              <div className="unit"></div>
            );
          })
        );
       })
     }
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
