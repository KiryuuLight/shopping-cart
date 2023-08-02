import { useState } from 'react';

function useCounter(initialValue: number) {
  const [counter, setCounter] = useState(initialValue);

  const decrement = () => {
    if (counter === initialValue) return;

    setCounter((prev) => prev - 1);
  };

  const increment = () => {
    setCounter((prev) => prev + 1);
  };

  return { counter, increment, decrement };
}

export default useCounter;
