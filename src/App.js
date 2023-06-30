import { useState } from "react";
import "./App.css";
import TLenght from "./TLenght";

function App() {
  const [breakTime, setBreakTime] = useState(5);
  const [sessionTime, setSessionTime] = useState(25);
  const [inPlay, setInPlay] = useState(false);
  const [intervalId, setIntervalId] = useState()
  const [displayTime, setDisplayTime] = useState(sessionTime * 60);

  const formatTime = (time) => {
    let min =
      Math.floor(time / 60) < 10
        ? "0" + Math.floor(time / 60)
        : Math.floor(time / 60);

    let sec = time % 60 < 10 ? "0" + (time % 60) : time % 60;
    return min + ":" + sec;
  };

  // handles increase and decrease of time untis on click
  const handleTimeChange = (e) => {
    console.log(e.target.className.includes("up"));

    if (e.target.className.includes("up")) {
      if (e.target.id.includes("break") && breakTime < 60) {
        setBreakTime(breakTime + 1);
      } else if (e.target.id.includes("session")) {
        if (sessionTime < 60) {
          setSessionTime(sessionTime + 1);
          setDisplayTime((sessionTime + 1) * 60);
        }
      }
    } else {
      if (e.target.id.includes("break") && breakTime > 0) {
        setBreakTime(breakTime - 1);
      } else if (e.target.id.includes("session")) {
        if (sessionTime > 0) {
          setSessionTime(sessionTime - 1);
          setDisplayTime((sessionTime - 1) * 60);
        } else {
        }
      }
    }
  };
  //handle the count down

  //why does the count spped up when play is pressed twice
  const handlePlay = () => {
    if (inPlay && !intervalId) {
      setIntervalId(() => {setInterval(() => {
        setDisplayTime((prev) => {
          return prev - 1;
        });
        console.log("still in play...");
      }, 1000);}) 
      console.log("in play is true");
    } else {
      clearInterval(intervalId);
      setIntervalId()
      setDisplayTime(displayTime);
      console.log("interval cleared?", intervalId);
    }
  };

  const handleReset = () => {
    clearInterval(intervalId);
    setInPlay(false);
    setBreakTime(5);
    setSessionTime(25);
    setDisplayTime(25 * 60);
  };
  return (
    <div className="App">
      <h1>25 + 5 Timer</h1>
      <div id="timeSetters">
        <TLenght
          title={"break"}
          time={breakTime}
          handleTimeChange={handleTimeChange}
        />

        <TLenght
          title={"session"}
          time={sessionTime}
          handleTimeChange={handleTimeChange}
        />
      </div>
      <div id="timer-label">
        <h3>Session/Break</h3>
        <h4 id="time-left">{formatTime(displayTime)}</h4>
        <div id="mainBtn">
          <button
            id="start_stop"
            onClick={() => {
              handlePlay();
              inPlay ? setInPlay(false) : setInPlay(true);
            }}
          >
            pause/play
          </button>
          <button id="reset" onClick={handleReset}>
            reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
