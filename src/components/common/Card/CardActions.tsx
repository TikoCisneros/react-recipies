import { useCardContext } from './CardContext';
import { CardProps } from './interfaces';

const CardActions = ({ children, className }: CardProps) => {
  useCardContext();

  return (
    <div className={`card__actions ${className ?? ''}`}>{children}</div>
  );
};

export default CardActions;