const { Schema, model } = require('mongoose');

module.exports = model(
  'Item',
  new Schema({
    name: String,
    unitPrice: Number,
  })
);
