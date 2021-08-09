import './App.css';
import React, { useState } from 'react';

const width = 15;
const height = 15;

function Game() {
  const [score,setScore] = useState(0);
  const [food, setFood] = useState([10,10]);
  const [snake, setSnake] = useState([[7,4], [6,4], [5,4]]);

  
  return (
    <div className="game">
      <ScoreBoard score={score}/>
      <Board snake={snake} food={food} />
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

function Board(props) {
  const columnArr = (new Array(width)).fill(null);
  for(let i = 0; i < columnArr.length; i++) {
    const rowArr = (new Array(height)).fill(null);
    columnArr[i] = rowArr;
  }
  
  const isFood = 1;
  const isSnake = 2;

  const[foodX, foodY]= props.food;
  columnArr[foodX][foodY] = isFood;

  props.snake.forEach(snakeArr => {
    const [snakeX,snakeY] = snakeArr;
    columnArr[snakeX][snakeY] = isSnake;
  });
 
  return (
    <div className="board">
     {
       columnArr.map((column, x) => {
        return (
          column.map((cell, y) => {
            if(cell === isFood) {
              return (<div className="unit food"></div>)
            }
            if(cell === isSnake) {
                return (<div className="unit snake"></div>)
            }
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
