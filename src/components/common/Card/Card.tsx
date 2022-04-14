import React from 'react';
import CardContext, { INITIAL_VALUE, useCardContext } from './CardContext';
interface CardProps {
  children?: React.ReactNode;
  className?: string;
}

interface CardImageProps {
  src: string;
  alt: string;
  className?: string;
}

const CardImage = ({ src, alt, className }: CardImageProps) => {
  useCardContext();

  return (
    <img
      className={`card__image ${className ?? ''}`}
      src={src}
      alt={alt}
    />
  )
};

const CardBody = ({ children, className }: CardProps) => {
  useCardContext();

  return (
    <div className={`card__body ${className ?? ''}`}>{children}</div>
  );
};

const CardActions = ({ children, className }: CardProps) => {
  useCardContext();

  return (
    <div className={`card__actions ${className ?? ''}`}>{children}</div>
  );
};

const Card = ({ children, className }: CardProps) => (
  <CardContext.Provider value={INITIAL_VALUE}>
    <div className={`card ${className ?? ''}`}>{children}</div>
  </CardContext.Provider>
);

Card.Body = CardBody;
Card.Image = CardImage;
Card.Actions = CardActions;

export default Card;
