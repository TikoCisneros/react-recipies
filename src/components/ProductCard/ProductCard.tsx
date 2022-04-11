import { IProduct } from '../../models/Product';
import Card from '../common/Card';

interface Props {
  data: IProduct;
}

const ProductCard = ({ data }: Props) => {
  const { id, title, price, image } = data;

  return (
    <Card className="product-card">
      <Card.CardImage className="product-card__image" src={image} alt={`product-${id}`} />
      <Card.CardBody className="product-card__body">
        <h2>{title}</h2>
        <span>{`$ ${price}`}</span>
      </Card.CardBody>
    </Card>
  );
};

export default ProductCard;
