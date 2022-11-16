import classes from './CartItem.module.css';
import {useDispatch} from 'react-redux';
import {addItem, removeItem} from '../../store/cartSlice';

const CartItem = (props) => {
  const { name, quantity, totalPrice, unitPrice, id } = props.item;
  const dispatch = useDispatch();

  const addItemHandler = () => {
    dispatch(addItem(id));
  };

  const removeItemHandler = () => {
    dispatch(removeItem(id));
  }

  return (
    <li className={classes.item}>
      <header>
        <h3>{name}</h3>
        <div className={classes.price}>
          ${totalPrice.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${unitPrice.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeItemHandler}>-</button>
          <button onClick={addItemHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
