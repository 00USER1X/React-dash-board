import React, { useState, useEffect } from 'react';
import "./DigitalClock.css"
function DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  
  const formattedTime = time.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  });

  return (
    <div className="digital-clock">
      <h1>MEKHI SUPER DIGITAL</h1>
      <p>{formattedTime}</p>
    </div>
  );
}

export default DigitalClock;

