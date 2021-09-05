import React from 'react';

function Board({ width, height, snake, food, headDirectionClass }) {
  const columnArr = new Array(width).fill(null);
  for (let i = 0; i < columnArr.length; i++) {
    const rowArr = new Array(height).fill(null);
    columnArr[i] = rowArr;
  }

  const isFood = 1;
  const isSnake = 2;
  const isSnakeHead = 3;
  const [foodX, foodY] = food;
  columnArr[foodX][foodY] = isFood;

  snake.forEach((snakeArr, index) => {
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
                className={`unit snakeHead ${headDirectionClass}`}
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
