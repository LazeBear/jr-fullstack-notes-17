const CartModel = require('../models/cart');

const getCart = async (req, res) => {
  // {id:xxx}
  const { id } = req.user;
  if (!id) {
    res.status(401).json({ error: 'authentication required' });
    return;
  }

  const cart = await CartModel.findOne({ user: id }).exec();
  if (!cart) {
    res.json({
      items: [],
      totalNumOfItems: 0,
    });
    return;
  }
  const totalNumOfItems = cart.items.reduce(
    (previous, current) => previous + current.quantity,
    0
  );
  res.json({ items: cart.items, totalNumOfItems });
};

const updateCart = async (req, res) => {
  const { items } = req.body;
  const { id } = req.user;
  if (!id) {
    res.status(401).json({ error: 'authentication required' });
    return;
  }
  let cart = await CartModel.findOne({ user: id }).exec();
  if (!cart) {
    cart = new CartModel({ items, user: id });
  }
  const totalNumOfItems = cart.items.reduce(
    (previous, current) => previous + current.quantity,
    0
  );
  cart.items = items;
  await cart.save();
  res.json({ items: cart.items, totalNumOfItems });
};

module.exports = {
  getCart,
  updateCart,
};
