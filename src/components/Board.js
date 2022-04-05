import '../style/board.css';

const snakeValue = 1;
const foodValue = 2;

function Xaxis({xAxisArr, y, isGameOver} ) {
  const animaPlayState = isGameOver ? 'running' : 'paused';

  return (
    <div className="xaxis">
      {xAxisArr.map((cell, x) => {
        let k = `${y}-${x}`
        if (cell === snakeValue){
          return <div key={k} className={`unit snake shakingSnake ${animaPlayState}`}></div>
        }
        if (cell === foodValue){
          return <div key={k} className="unit food"></div>
        }
        return <div key={k} className="unit"></div>
      })}
    </div>
  );
}

function Board({width, height, snake, food, isGameOver}){
  const yAxisArr = new Array(height).fill(null);

  for (let i = 0; i < yAxisArr.length; i++) {
    yAxisArr[i] = new Array(width).fill(null);
  }
  
  snake.forEach((element) => {
    const [snakeX, snakeY] = element;
    yAxisArr[snakeY][snakeX] = snakeValue;
  });

  const [foodX, foodY] = food;
  yAxisArr[foodY][foodX] = foodValue;

  return (
    <div className="board">
      {yAxisArr.map((xAxisArr, y) => {
        return (
          <Xaxis key={y} xAxisArr={xAxisArr} y={y} isGameOver={isGameOver}/>
        )
      })}
    </div>
  );
}

export default Board;
