import React from 'react';

function Board(props) {
  const columnArr = new Array(props.width).fill(null);
  for (let i = 0; i < columnArr.length; i++) {
    const rowArr = new Array(props.height).fill(null);
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

export default Board;