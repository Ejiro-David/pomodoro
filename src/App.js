import { useState } from "react";
import "./App.css";

function App() {
  const [state, setState] = useState({
    session: 25,
    break: 5,
  });

  const [display, setDisplay] = useState({ session: true });


  const handleDecr = (e) => {
    let id = e.target.id;
    if (id.includes("break")) {
      setState({
        session: state.session,
        break: state.break - 1,
      });
    } else {
      setState({
        break: state.break,
        session: state.session - 1,
      });
    }
  };

  //count down, reset and pause/play fearture
  const handleIncr = (e) => {
    let id = e.target.id;
    console.log(id, state);
    if (id.includes("break")) {
      setState({
        session: state.session,
        break: state.break + 1,
      });
    } else {
      setState({
        break: state.break,
        session: state.session + 1,
      });
    }
  };

  return (
    <div className="App">
      <h1>25 + 5 Timer</h1>
      <div id="timeSetters">
        <div id="break-label">
          <h3>Break Lenght</h3>
          <h4 className="time-display" id="break-length">
            {state.break}
          </h4>
          <div className="smallBtn">
            <button
              id="break-increment"
              onClick={
                state.break <= 60
                  ? handleIncr
                  : setState({ session: state.session, break: 1 })
              }
            >
              up
            </button>
            <button
              id="break-decrement"
              onClick={
                state.break > 0
                  ? handleDecr
                  : setState({ session: state.session, break: 60 })
              }
            >
              down
            </button>
          </div>
        </div>

        <div id="session-label">
          <h3>Session Lenght</h3>
          <h4 className="time-display" id="session-length">
            {state.session}
          </h4>
          <div className="smallBtn">
            <button
              id="session-increment"
              onClick={
                state.session <= 60
                  ? handleIncr
                  : setState({ break: state.break, session: 1 })
              }
            >
              up
            </button>
            <button
              id="session-decrement"
              onClick={
                state.session > 0
                  ? handleDecr
                  : setState({ break: state.break, session: 60 })
              }
            >
              down
            </button>
          </div>
        </div>
      </div>

      <div>
        <h3 id="timer-label">Session/Break</h3>
        <h4 id="time-left">{display.session ? state.session : state.break}</h4>

        <div id="mainBtn">
          <button id="start_stop">pause/play</button>
          <button id="reset">reset</button>
        </div>
      </div>
    </div>
  );
}

export default App;
