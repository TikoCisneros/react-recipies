import { useState } from 'react';

const MAX_DEFAULT_VALUE = 999999999;
const MIN_DEFAULT_VALUE = 0;

interface UseIncrementParams {
  min?: number;
  max?: number;
  onIncreaseChange?: (value: number) => void;
}

export const useIncrement = ({
  min = MIN_DEFAULT_VALUE,
  max = MAX_DEFAULT_VALUE,
  onIncreaseChange,
}: UseIncrementParams = {}) => {
  const [counter, setCounter] = useState(min);

  const increaseBy = (value: number) => () => {
    const nextValue = counter + value;

    if (nextValue >= min && nextValue <= max) {
      setCounter(nextValue);
      onIncreaseChange?.(nextValue);
    }
  };

  return {
    counter,
    increaseBy,
  };
};
