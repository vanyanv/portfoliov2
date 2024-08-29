import React, { useEffect, useState } from 'react';

export default function DisplayTime() {
  const [dateTime, setDateTime] = useState(new Date());

  const formattedTime = dateTime.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true, // Change to false for 24-hour format
  });

  useEffect(() => {
    // Set up an interval to update the time every second
    const intervalId = setInterval(() => {
      setDateTime(new Date());
    }, 1000); // Update every minute

    // Cleanup the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);
  return <>{formattedTime}</>;
}
