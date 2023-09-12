import React, { useState, useEffect } from 'react';

function CurrentDateTime() {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000); // Update every 1 second

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  const formatDate = (date) => {
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    };
    return date.toLocaleDateString(undefined, options);
  };

  return (
    <div>
      <h1>Current Date and Time</h1>
      <p>{formatDate(currentDateTime)}</p>
    </div>
  );
}

export default CurrentDateTime;

