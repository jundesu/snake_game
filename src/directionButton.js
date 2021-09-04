import React from 'react';

function DirectionButton(props) {
  return (
    <div className="directionBtn">
      <button
        onClick={() => props.handleDirectionBtn('ArrowUp')}
        className="btnStyle arrowUp"
        type="button"
      ></button>
      <div className="leftRight">
        <button
          onClick={() => props.handleDirectionBtn('ArrowLeft')}
          className="btnStyle arrowLeft"
          type="button"
        ></button>
        <button
          onClick={() => props.handleDirectionBtn('ArrowRight')}
          className="btnStyle arrowRight"
          type="button"
        ></button>
      </div>
      <button
        onClick={() => props.handleDirectionBtn('ArrowDown')}
        className="btnStyle arrowDown"
        type="button"
      ></button>
    </div>
  );
}

export default DirectionButton;