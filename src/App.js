import './App.css';
import React, { useEffect, useState, useRef } from 'react';

const width = 15;
const height = 15;
const startFromHere = [
  [7, 4],
  [6, 4],
  [5, 4],
];

function Game() {
  const [score, setScore] = useState(0);
  const [food, setFood] = useState([10, 10]);
  const [snake, setSnake] = useState(startFromHere);
  const [direction, setDirection] = useState([1, 0]);
  const [delay, setDelay] = useState(null);
  const [displayStartButton, setDisplayStartButton] = useState('fullPage');
  const [headDirectionClass, setHeadDirectionClass] = useState('turnRight');

  const startGame = () => {
    setDisplayStartButton('hidden');
    setDelay(300);
    setSnake(startFromHere);
    setScore(0);
    setDirection([1, 0]);
    setHeadDirectionClass('turnRight');
  };

  useInterval(() => {
    const head = snake[0];
    const newHead = [head[0] + direction[0], head[1] + direction[1]];
    const newSnake = snake.slice();
    const eatFood = newHead[0] === food[0] && newHead[1] === food[1];

    if (isGameOver(newHead, snake)) {
      setDelay(null);
      setDisplayStartButton('fullPage');
      return;
    }
    if (eatFood) {
      const nextFood = controlRandomFood(snake);
      setScore(score + 1);
      setFood(nextFood);
      newSnake.unshift(newHead);
      if (score % 3 === 0) {
        setDelay(delay - 50);
      }
    } else {
      newSnake.unshift(newHead);
      newSnake.pop();
    }
    setSnake(newSnake);
  }, delay);

  useListener('keydown', (e) => {
    switch (e.code) {
      case 'ArrowUp':
        if (direction[0] !== 0) {
          setDirection([0, -1]);
          setHeadDirectionClass('up');
        }
        break;
      case 'ArrowDown':
        if (direction[0] !== 0) {
          setDirection([0, 1]);
          setHeadDirectionClass('down');
        }
        break;
      case 'ArrowLeft':
        if (direction[1] !== 0) {
          setDirection([-1, 0]);
          setHeadDirectionClass('turnLeft');
        }
        break;
      case 'ArrowRight':
        if (direction[1] !== 0) {
          setDirection([1, 0]);
          setHeadDirectionClass('turnRight');
        }
        break;
    }
  });

  return (
    <div className="game">
      <ScoreBoard score={score} />
      <Board
        snake={snake}
        food={food}
        headDirectionClass={headDirectionClass}
      />
      <StartButton
        startGame={startGame}
        displayStartButton={displayStartButton}
      />
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
  const columnArr = new Array(width).fill(null);
  for (let i = 0; i < columnArr.length; i++) {
    const rowArr = new Array(height).fill(null);
    columnArr[i] = rowArr;
  }

  const isFood = 1;
  const isSnake = 2;
  const isSnakeHead = 3;
  const [foodX, foodY] = props.food;
  columnArr[foodX][foodY] = isFood;

  props.snake.forEach((snakeArr, index) => {
    const [snakeX, snakeY] = snakeArr;
    if (index === 0) {
      columnArr[snakeX][snakeY] = isSnakeHead;
    } else {
      columnArr[snakeX][snakeY] = isSnake;
    }
  });

  return (
    <div className="board">
      {columnArr.map((column, x) => {
        return column.map((cell, y) => {
          const k = `${x}${y}`;
          if (cell === isFood) {
            return <div key={k} className="unit food"></div>;
          }
          if (cell === isSnake) {
            return <div key={k} className="unit snake"></div>;
          }
          if (cell === isSnakeHead) {
            return (
              <div
                key={k}
                className={`unit snakeHead ${props.headDirectionClass}`}
              ></div>
            );
          }
          return <div key={k} className="unit"></div>;
        });
      })}
    </div>
  );
}

function StartButton(props) {
  return (
    <div className={props.displayStartButton}>
      <button className="startButton" onClick={props.startGame}>
        start
      </button>
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
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
};

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
    return () => document.removeEventListener(type, handle);
  }, [type]);
};

const controlRandomFood = (snake) => {
  for (;;) {
    let x = Math.floor(Math.random() * width);
    let y = Math.floor(Math.random() * height);
    const found = snake.find((element) => {
      if (element[0] === x && element[1] === y) {
        return true;
      }
    });
    if (found === undefined) {
      return [x, y];
    }
  }
};

const isGameOver = (newHead, snake) => {
  const borderWidth = width - 1;
  const borderHeight = height - 1;
  const overBorder =
    newHead[0] > borderWidth ||
    newHead[0] < 0 ||
    newHead[1] > borderHeight ||
    newHead[1] < 0;
  const touchBody = snake.find((e) => {
    if (e[0] === newHead[0] && e[1] === newHead[1]) {
      return true;
    }
    return false;
  });
  return overBorder || touchBody;
};

function App() {
  return (
    <div className="app">
      <Game />
    </div>
  );
}

export default App;
