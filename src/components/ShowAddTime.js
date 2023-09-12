import React, { useState } from 'react';
import CurrentDateTime from './CurrentDateTime';

function ShowAddTime() {
  const [showDateTime, setShowDateTime] = useState(false);
  const [dateTimeComponents, setDateTimeComponents] = useState([]);

  const handleClick = () => {
   setShowDateTime(!showDateTime);

    if (!showDateTime) {
      // Add a new CurrentDateTime component to the array
      setDateTimeComponents([...dateTimeComponents, <CurrentDateTime key={Date.now()} />]);
     //<CurrentDateTime key={Date.now()} />
    }
  };
     
  return (
    <div>
      <button onClick={handleClick}>
        {showDateTime ? 'Hide Date and Time' : 'Show Date and Time'}
      </button>
      {dateTimeComponents.map((component, index) => (
        <div key={index}>{component}</div>
      ))}
    </div>
  );
  

}

export default ShowAddTime;
