import React from 'react';

function DirectionButton({ handleDirectionBtn }) {
  return (
    <div className="directionBtn">
      <button
        onClick={() => handleDirectionBtn('ArrowUp')}
        className="btnStyle arrowUp"
        type="button"
      ></button>
      <div className="leftRight">
        <button
          onClick={() => handleDirectionBtn('ArrowLeft')}
          className="btnStyle arrowLeft"
          type="button"
        ></button>
        <button
          onClick={() => handleDirectionBtn('ArrowRight')}
          className="btnStyle arrowRight"
          type="button"
        ></button>
      </div>
      <button
        onClick={() => handleDirectionBtn('ArrowDown')}
        className="btnStyle arrowDown"
        type="button"
      ></button>
    </div>
  );
}

export default DirectionButton;
