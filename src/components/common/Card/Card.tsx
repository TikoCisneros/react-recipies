import React from 'react';

interface CardProps {
  children?: React.ReactNode;
  className?: string;
}

interface CardImageProps {
  src: string;
  alt: string;
  className?: string;
}

const CardImage = ({ src, alt, className }: CardImageProps) => (
  <img
    className={`card__image ${className ?? ''}`}
    src={src}
    alt={alt}
  />
);

const CardBody = ({ children, className }: CardProps) => (
  <div className={`card__body ${className ?? ''}`}>{children}</div>
);

const Card = ({ children, className }: CardProps) => (
  <div className={`card ${className ?? ''}`}>{children}</div>
);

Card.CardBody = CardBody;
Card.CardImage = CardImage;

export default Card;
