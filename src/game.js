import React, { useState } from 'react';
import ScoreBoard from './scoreBoard';
import Board from './board';
import StartButton from './startButton';
import DirectionButton from './directionButton';
import { useInterval, useListener } from './customHook';

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
    setFood([10, 10]);
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
        setDelay(delay - 20);
      }
    } else {
      newSnake.unshift(newHead);
      newSnake.pop();
    }
    setSnake(newSnake);
  }, delay);

  useListener('keydown', (e) => {
    handleDirectionBtn(e.code);
  });

  const handleDirectionBtn = (code) => {
    switch (code) {
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
  };

  return (
    <div className="game">
      <ScoreBoard score={score} />
      <Board
        width={width}
        height={height}
        snake={snake}
        food={food}
        headDirectionClass={headDirectionClass}
      />
      <DirectionButton handleDirectionBtn={handleDirectionBtn} />
      <StartButton
        startGame={startGame}
        displayStartButton={displayStartButton}
      />
    </div>
  );
}

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

export default Game;
