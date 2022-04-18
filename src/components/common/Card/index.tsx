import CardHOC from './Card';

import CardActions from './CardActions';
import CardBody from './CardBody';
import CardImage from './CardImage';

import { CardHOCProps } from './interfaces';

const Card: CardHOCProps = Object.assign(CardHOC, {
  Body: CardBody,
  Image: CardImage,
  Actions: CardActions
})

export default Card;

