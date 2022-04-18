import { useCardContext } from './CardContext';
import { CardProps } from './interfaces';

const CardBody = ({ children, className }: CardProps) => {
  useCardContext();

  return (
    <div className={`card__body ${className ?? ''}`}>{children}</div>
  );
};

export default CardBody;