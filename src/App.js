import { useState } from "react";
import "./App.css";

function App() {
  const [state, setState] = useState({
    session: 25,
    break: 5,
  });
  const [focus, setFocus] = useState(true)

  const [displayTime, setDisplayTime] = useState(state.session)

  if(state.session === 0){
    setFocus(false)
  }

  const handleDecr = (e) => {

   
  };

  //count down, reset and pause/play fearture
  const handleIncr = (e) => {
    
  };

  const handlePlay = () => {

  };

  return (
    <div className="App">
      <h1>25 + 5 Timer</h1>
      <div id="timeSetters">
        <div id="break-label">
          <h3>Break Lenght</h3>
          <h4 className="time-display" id="break-length">
            5
          </h4>
          <div className="smallBtn">
            <button id="break-increment" onClick={handleIncr}>
              up
            </button>
            <button id="break-decrement" onClick={handleDecr}>
              down
            </button>
          </div>
        </div>

        <div id="session-label">
          <h3>Session Lenght</h3>
          <h4 className="time-display" id="session-length">
            25
          </h4>
          <div className="smallBtn">
            <button id="session-increment" onClick={handleIncr}>
              up
            </button>
            <button id="session-decrement" onClick={handleDecr}>
              down
            </button>
          </div>
        </div>
      </div>

      <div id="timer-label">
        <h3>Session/Break</h3>
        <h4 id="time-left">{displayTime}</h4>
        <div id="mainBtn">
          <button id="start_stop" onClick={handlePlay}>
            pause/play
          </button>
          <button id="reset">reset</button>
        </div>
      </div>
    </div>
  );
}

export default App;
