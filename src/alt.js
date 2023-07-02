import { useState, useEffect } from "react";
import "./App.css";
import TLenght from "./TLenght";

function App() {
  // State variables
  const [breakTime, setBreakTime] = useState(5); // Initial break time
  const [sessionTime, setSessionTime] = useState(25); // Initial session time
  const [isRunning, setIsRunning] = useState(false); // Timer running status
  const [isBreak, setIsBreak] = useState(false); // Break status
  const [timerId, setTimerId] = useState(null); // Timer interval ID
  const [displayTime, setDisplayTime] = useState(sessionTime * 60); // Displayed time in seconds

  // Update display time when session time changes
  useEffect(() => {
    setDisplayTime(sessionTime * 60);
  }, [sessionTime]);

  // Format time in MM:SS format
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes < 10 ? "0" : ""}${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  // Handle increase and decrease of time units on click
  const handleTimeChange = (e) => {
    const { id, className } = e.target;
    const isIncrement = className.includes("up");

    if (id.includes("break")) {
      setBreakTime((prevTime) => (isIncrement && prevTime < 60 ? prevTime + 1 : prevTime - 1));
    } else if (id.includes("session")) {
      setSessionTime((prevTime) => (isIncrement && prevTime < 60 ? prevTime + 1 : prevTime - 1));
    }
  };

  // Handle the play/pause functionality
  const handlePlay = () => {
    if (!isRunning) {
      setIsRunning(true);
      setTimerId(
        setInterval(() => {
          setDisplayTime((prevTime) => {
            if (prevTime <= 0) {
              clearInterval(timerId);
              setIsBreak((prevBreak) => !prevBreak);
              return prevBreak ? sessionTime * 60 : breakTime * 60;
            } else {
              return prevTime - 1;
            }
          });
        }, 1000)
      );
    } else {
      setIsRunning(false);
      clearInterval(timerId);
      setTimerId(null);
    }
  };

  // Handle the reset functionality
  const handleReset = () => {
    setIsRunning(false);
    setIsBreak(false);
    clearInterval(timerId);
    setTimerId(null);
    setBreakTime(5);
    setSessionTime(25);
    setDisplayTime(25 * 60);
  };

  return (
    <div className="App">
      <h1>25 + 5 Timer</h1>
      <div id="timeSetters">
        <TLenght
          title="break"
          time={breakTime}
          handleTimeChange={handleTimeChange}
        />
        <TLenght
          title="session"
          time={sessionTime}
          handleTimeChange={handleTimeChange}
        />
      </div>
      <div id="timer-label">
        <h3>Session/Break</h3>
        <h4 id="time-left">{formatTime(displayTime)}</h4>
        <div id="mainBtn">
          <button id="start_stop" onClick={handlePlay}>
            {isRunning ? "Pause" : "Play"}
          </button>
          <button id="reset" onClick={handleReset}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
