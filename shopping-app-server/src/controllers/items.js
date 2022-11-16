const ItemModel = require('../models/item');

const getItems = async (req, res) => {
  const { page = 1, pageSize = 100 } = req.query;

  // limit, skip
  // limit 2, skip 0, [1,2]
  // limit 3, skip 1, [2,3,4]
  // [1,2,3,4,5,6]

  // pageSize is a string
  // if you want to limit min number, Math.max(limit, 10)
  const limit = pageSize * 1;
  const skip = limit * Math.max(page * 1, 1);

  const items = await ItemModel.find().limit(limit).skip(skip).exec();
  res.json({ items });
};

module.exports = {
  getItems,
};
