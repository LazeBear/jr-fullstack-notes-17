import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import {useDispatch} from 'react-redux';
import {addToCart} from '../../store/cartSlice';

const ProductItem = (props) => {
  const { name, unitPrice, description, id } = props;
  const dispatch = useDispatch();
  const addToCartHandler = () => {
    dispatch(addToCart({
      name, unitPrice, id
    }));
  }
  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{name}</h3>
          <div className={classes.price}>${unitPrice.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addToCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
