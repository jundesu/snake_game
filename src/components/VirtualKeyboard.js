import '../style/virtualKeyboard.css';

function VirtualKeyboard({handleKeydown}) {
  return (
    <div className="virtualkeyboard">
      <button data-testid="up" type="button" className="btn up" onClick={() => handleKeydown('ArrowUp')}></button>
      <div className="mid-btn">
        <button data-testid="left" type="button" className="btn left" onClick={() => handleKeydown('ArrowLeft')}></button>
        <button data-testid="right" type="button" className="btn right"onClick={() => handleKeydown('ArrowRight')}></button>
      </div>
      <button data-testid="down" type="button" className="btn down"onClick={() => handleKeydown('ArrowDown')}></button>
    </div>
  );
}

export default VirtualKeyboard;
