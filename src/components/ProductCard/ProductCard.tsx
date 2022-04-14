import { IProduct } from '../../models/Product';
import Button from '../common/Button';
import Card from '../common/Card';

interface Props {
  data: IProduct;
}

const ProductCard = ({ data }: Props) => {
  const { id, title, price, image } = data;

  return (
    <Card className="product-card">
      <Card.Image className="product-card__image" src={image} alt={`product-${id}`} />
      <Card.Body className="product-card__body">
        <span>{title}</span>
      </Card.Body>
      <Card.Actions>
        <span className="product-card__price ">{`$${price}`}</span>
        <Button label="Add to cart" />
      </Card.Actions>
    </Card>
  );
};

export default ProductCard;
