import React from 'react';

export const INITIAL_VALUE = {};

const CardContext = React.createContext(INITIAL_VALUE);

export const useCardContext = () => {
  const context = React.useContext(CardContext);

  if (!context) {
    throw new Error('Warning! This component should be inside the Card component.');
  }

  return context;
}

export default CardContext;