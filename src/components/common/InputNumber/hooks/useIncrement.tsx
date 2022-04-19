import { useEffect, useState } from 'react';

export const useIncrement = (onIncreaseChange?: (value: number) => void, min = 0) => {
  const [counter, setCounter] = useState(min);

  const increaseBy = (value: number) => () => setCounter((prev) => Math.max(prev + value, 0));

  useEffect(() => {
    if (onIncreaseChange) {
      onIncreaseChange(counter);
    }
  }, [counter])

  return {
    counter,
    increaseBy,
  };
};
