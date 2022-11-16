const { Router } = require('express');
const { getCart, updateCart } = require('../controllers/carts');

const cartRouter = Router();

// users/:userId/cart
// carts/:cartId
cartRouter.get('', getCart);
cartRouter.put('', updateCart);

module.exports = cartRouter;
