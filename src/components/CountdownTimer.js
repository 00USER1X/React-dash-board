import React, { useState } from 'react';
import "./CountdownTimer.css"
function CountdownTimer() {
  const [hours, setHours] = useState('0');
  const [minutes, setMinutes] = useState('0');
  const [seconds, setSeconds] = useState('0');
  const [remainingTime, setRemainingTime] = useState('0:00:00');

  const handleStart = () => {
    const totalSeconds = parseInt(hours) * 3600 + parseInt(minutes) * 60 + parseInt(seconds);

    let timeLeft = totalSeconds;
    const timer = setInterval(() => {
      const hoursLeft = Math.floor(timeLeft / 3600);
      const minutesLeft = Math.floor((timeLeft % 3600) / 60);
      const secondsLeft = timeLeft % 60;
      setRemainingTime(
        `${hoursLeft}:${minutesLeft < 10 ? '0' : ''}${minutesLeft}:${secondsLeft < 10 ? '0' : ''}${secondsLeft}`
      );

      if (timeLeft === 0) {
        clearInterval(timer);
      } else {
        timeLeft--;
      }
    }, 1000);
  };

  return (
    <div className="countdown-timer">
      <div className="input-fields">
        <input
          type="number"
          placeholder="Hours"
          value={hours}
          onChange={(e) => setHours(e.target.value)}
        />
        <input
          type="number"
          placeholder="Minutes"
          value={minutes}
          onChange={(e) => setMinutes(e.target.value)}
        />
        <input
          type="number"
          placeholder="Seconds"
          value={seconds}
          onChange={(e) => setSeconds(e.target.value)}
        />
      </div>
      <button className="start-button" onClick={handleStart}>
        Start
      </button>
      <div className="display">{remainingTime}</div>
    </div>
  );
}

export default CountdownTimer;

