import React, { useState, useEffect } from 'react';

const useGreeting = () => {
  const [greeting, setGreeting] = useState<String | null>(null);

  const today = new Date();
  const curHr = today.getHours();

  useEffect(() => {
    if (curHr < 12) {
      setGreeting('Good morning');
    } else if (curHr < 18) {
      setGreeting('Good afternoon');
    } else {
      setGreeting('Good evening');
    }
  }, [curHr]);

  return greeting;
};

export default useGreeting;
