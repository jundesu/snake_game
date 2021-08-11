import './App.css';
import React, { useEffect, useState, useRef } from 'react';

const width = 15;
const height = 15;

function Game() {
  const [score,setScore] = useState(0);
  const [food, setFood] = useState([10,10]);
  const [snake, setSnake] = useState([[7,4], [6,4], [5,4]]);
  const [direction, setDirection] = useState([1,0]);
  const [delay, setDelay] = useState(500);

  useInterval(() => {
    const head = snake[0];
    const newHead = [head[0] + direction[0], head[1] + direction[1]];
    const newSnake = snake.slice();
    newSnake.unshift(newHead);
    newSnake.pop();
    setSnake(newSnake);
  }, delay);

  useListener('keydown', (e) => {
    switch(e.code) {
      case 'ArrowUp':
        if(direction[0] !== 0) {
          setDirection([0, -1]);
        }
        break;
      case 'ArrowDown':
        if(direction[0] !== 0) {
          setDirection([0, 1]);
        }
        break;
      case 'ArrowLeft':
        if(direction[1] !== 0) {
          setDirection([-1, 0]);
        }
        break;
      case 'ArrowRight':
        if(direction[1] !== 0) {
          setDirection([1, 0]);
        }
        break;
    }
  });

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
            const k = `${x}${y}`
            if(cell === isFood) {
              return (<div key={k} className="unit food"></div>)
            }
            if(cell === isSnake) {
                return (<div key={k} className="unit snake"></div>)
            }
            return (
            <div key={k} className="unit"></div>
            );
          })
        );
       })
     }
    </div>
  );
}

const useInterval = (callback, delay) => {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const tick = () => {
      savedCallback.current();
    };
    let id = setInterval(tick, delay);
    return () => clearInterval(id);
    
  },[delay]);
}

const useListener = (type, callback) => {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const handle = (e) => {
      savedCallback.current(e);
    };
    document.addEventListener(type, handle);
    return () => document.addEventLlistener(type, handle)
    
  }, [type]);
}


function App() {
  return (
    <div className="app">
      <Game />
    </div>
  );
}

export default App;
