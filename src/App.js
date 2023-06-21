import "./App.css";

function App() {
  const breakLenght = 5;
  const sessionLenght = 25;
  return (
    <div className="App">
      <h1>25 + 5 Timer</h1>
      <div id="timeSetters">
        <div id="break-label">
          <h3>Break Lenght</h3>
          <h4 className="time-display" id="break-length">5</h4>
          <div className="smallBtn">
            <button id="break-increment">up</button>
            <button id="break-decrement">down</button>
          </div>
        </div>

        <div id="session-label">
          <h3>Session Lenght</h3>
          <h4 className="time-display" id="session-length">25</h4>
          <div className="smallBtn">
            <button id="session-increment">up</button>
            <button id="session-decrement">down</button>
          </div>
        </div>
      </div>

      <div>
        <h3 id="timer-label">Session/Break</h3>
        <h4 id="time-left" >{sessionLenght}</h4>

        <div id="mainBtn">
            <button id="start_stop">pause/play</button>
            <button id="reset">reset</button>
          </div>
      </div>
    </div>
  );
}

export default App;
