import CardContext, { INITIAL_VALUE } from './CardContext';
import { CardProps } from './interfaces';

const Card = ({ children, className }: CardProps) => (
  <CardContext.Provider value={INITIAL_VALUE}>
    <div className={`card ${className ?? ''}`}>{children}</div>
  </CardContext.Provider>
);

export default Card;
