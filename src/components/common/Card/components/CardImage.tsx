import { useCardContext } from '../context/CardContext';
import { CardImageProps } from '../interfaces';

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

export default CardImage;