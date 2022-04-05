import { useState, useEffect } from 'react';
import  { useInterval, useListener } from '../utils/customHook';

import StartButton from './StartButton';
import Board from './Board';
import ScoreBoard from './ScoreBoard';
import VirtualKeyboard from './VirtualKeyboard';
import '../style/game.css';

const width = 15;
const height = 15; 
const startFromHere = [[10,4], [11,4], [12,4]];

function Game(){
  const [snake, setSnake] = useState(startFromHere); 
  const [direction, setDirection] = useState([-1,0]);
  const [food, setFood] = useState([9,7]);
  const [delay, setDelay] = useState(null);
  const [score, setScore] = useState(0);
  const [displayStartBtn, setDisplayStartBtn] = useState(true);
  const [isGameOver, setIsGameOver] = useState(false);

  const startGame = () => {
    setDisplayStartBtn(false);
    setDelay(250);
    setSnake(startFromHere);
    setDirection([-1,0]);
    setFood([9,7]);
    setScore(0);
    setIsGameOver(false);
  };
  
  const moveSnake = () => {
    const head = snake[0]; 
    const newHead = [head[0] + direction[0], head[1] + direction[1]];
    const newSnake = snake.slice();

    if(gameOver(newHead, snake)){
      setDelay(null);
      setIsGameOver(true);

    }else if(newHead[0] === food[0] && newHead[1] === food[1]){
      newSnake.unshift(newHead);
      setSnake(newSnake);
      const nextFood = generateRandomFood(newSnake);
      setFood(nextFood);
      setScore(prev => prev + 1);
      if(score % 2 === 0){
        setDelay(prev => prev - 20);
      }
    }else{
      newSnake.unshift(newHead);
      newSnake.pop();
      setSnake(newSnake);
    }
  }
  
  const handleKeydown = (code) => {
    switch(code) {
      case 'ArrowUp':         
        if(direction[0] !== 0 ){
          setDirection([0,-1]);
        }
        break;
      case 'ArrowDown':
        if(direction[0] !== 0 ){
          setDirection([0,1]);
        }
        break;
      case 'ArrowLeft':
        if(direction[1] !== 0 ){
          setDirection([-1,0])
        }
        break;
      case 'ArrowRight':
        if(direction[1] !== 0 ){
          setDirection([1,0])
        }
        break;
    }
  };

  useInterval(moveSnake, delay);
  useListener('keydown', (e) => handleKeydown(e.code));
  
  useEffect(() => {
    if(isGameOver){
      let id = setTimeout(() => {
        setDisplayStartBtn(true);
      }, 1200)
      return () => clearTimeout(id);
    }
  }, [isGameOver])
    
  return (
    <div className="game">
      {displayStartBtn && (
        <StartButton startGame={startGame}/>
      )}
      <ScoreBoard score={score}/>
      <Board 
        width={width} 
        height={height}
        snake={snake} 
        food={food}
        isGameOver={isGameOver}
      />
      <VirtualKeyboard handleKeydown={handleKeydown}/>
    </div>
  );
}

const generateRandomFood = (snake) => {
  for(;;){
    let x = Math.floor(Math.random() * width);
    let y = Math.floor(Math.random() * height);

    let newFood = snake.find((element) => {
      return element[0] === x && element[1] === y
    });
    if(newFood === undefined) {
      return [x,y]
    }
  }
}

const gameOver = (newHead, snake) => {
  const borderWidth = width - 1;
  const borderHeight = height - 1;
  const overBorder = newHead[0] < 0 || newHead[0] > borderWidth || newHead[1] < 0 || newHead[1] > borderHeight;
  
  const touchBody = snake.find((element) => {
    return element[0] === newHead[0] && element[1] === newHead[1]
  });

  return overBorder || touchBody;
};

export {gameOver, width, height};
export default Game;
