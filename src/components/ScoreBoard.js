import '../style/scoreBoard.css';

function ScoreBoard({score}){
  return (
    <div className="scoreBoard">
      score
      <span>{score}</span> 
    </div>
  );
}

export default ScoreBoard;
