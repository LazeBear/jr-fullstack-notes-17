import classes from './CartButton.module.css';
import {useDispatch, useSelector} from 'react-redux';
import {toggleShowCart} from '../../store/uiSlice';

const CartButton = () => {
  const dispatch = useDispatch();
  const totalNumOfItems = useSelector(state => state.cart.totalNumOfItems);
  const cartButtonHandler = () => {
    dispatch(toggleShowCart());
  }
  return (
    <button className={classes.button} onClick={cartButtonHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalNumOfItems}</span>
    </button>
  );
};

export default CartButton;
