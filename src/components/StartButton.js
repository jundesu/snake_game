import '../style/startButton.css';

function StartButton({startGame}) {
  return (
    <div className="overlay">
      <button className="startBtn" type="button" onClick={startGame}>start game</button>
    </div>  
  );
}

export default StartButton;
