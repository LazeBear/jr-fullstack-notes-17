const { Schema, model } = require('mongoose');

module.exports = model(
  'Cart',
  new Schema({
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    items: [
      new Schema({
        id: String,
        name: String,
        quantity: Number,
        totalPrice: Number,
        unitPrice: Number,
      }),
    ],
  })
);
