import CardHOC from './Card';

import CardActions from './components/CardActions';
import CardBody from './components/CardBody';
import CardImage from './components/CardImage';

import { CardHOCProps } from './interfaces';

const Card: CardHOCProps = Object.assign(CardHOC, {
  Body: CardBody,
  Image: CardImage,
  Actions: CardActions
})

export default Card;

