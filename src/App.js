import { useEffect, useState } from "react";
import "./App.css";
import TLenght from "./TLenght";

function App() {
  // Format time in MM:SS format
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes < 10 ? "0" : ""}${minutes}:${
      seconds < 10 ? "0" : ""
    }${seconds}`;
  };

  const [breakTime, setBreakTime] = useState(5); // Initial break time
  const [sessionTime, setSessionTime] = useState(25); // Initial session time
  const [isRunning, setIsRunning] = useState(false); // Timer running status
  const [isBreak, setIsBreak] = useState(false); // Break status
  const [timerId, setTimerId] = useState(null); // Timer interval ID
  const [displayTime, setDisplayTime] = useState(sessionTime * 60); // Displayed time in seconds

  useEffect(() => {
    setDisplayTime(isBreak ? breakTime * 60 : sessionTime * 60);
  }, [sessionTime, breakTime, isBreak]);

  const handleTimeChange = (e) => {
    setIsRunning(false);
    console.log("stopped");
    clearInterval(timerId);
    setTimerId(null);

    const { id, className } = e.target;
    const isIncrement = className.includes("up");

    if (id.includes("break")) {
      if (isIncrement && breakTime < 60) {
        setBreakTime((prev) => prev + 1);
      } else if (!isIncrement && breakTime > 1) {
        setBreakTime((prev) => prev - 1);
      }
    } else if (id.includes("session")) {
      if (isIncrement && sessionTime < 60) {
        setSessionTime((prev) => prev + 1);
      } else if (!isIncrement && sessionTime > 1) {
        setSessionTime((prev) => prev - 1);
      }
    }
  };

  const handleReset = () => {
    console.log("stopped");
    clearInterval(timerId);
    setBreakTime(5);
    setSessionTime(25);
    setIsBreak(false);
    setTimerId(null);
    setDisplayTime(sessionTime * 60);
    setIsRunning(false);
  };

  const handlePlay = () => {
    if (!isRunning) {
      setIsRunning(true);
      console.log("runing");
      setTimerId(
        setInterval(() => {
          setDisplayTime((prevTime) => {
            if (prevTime <= 0) {
              clearInterval(timerId);
              setIsBreak((prevBreak) => !prevBreak);
              return isBreak ? sessionTime * 60 : breakTime * 60;
            } else {
              return prevTime - 1;
            }
          });
        }, 1000)
      );
    } else {
      setIsRunning(false);
      console.log("paused");
      clearInterval(timerId);
      setTimerId(null);
    }
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
        <h3>{isBreak ? "Break" : "Session"}</h3>
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
