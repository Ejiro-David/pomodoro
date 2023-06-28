import React from "react";

function TLenght({title, time, handleTimeChange }) {
  return (
    <div id={title+'-label'}>
      <h3>{title} Length</h3>
      <h4 className="time-display" id="break-length">
        {time}
      </h4>
      <div className="smallBtn">
        <button className='up-button' id={title+'-increment'} onClick={handleTimeChange}>
          up
        </button>
        <button className="down-button" id={title+'-decrement'} onClick={handleTimeChange}>
          down
        </button>
      </div>
    </div>
  );
}

export default TLenght;
