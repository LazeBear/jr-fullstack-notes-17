const { Router } = require('express');
const { getItems } = require('../controllers/items');

const itemRouter = Router();

itemRouter.get('', getItems);

module.exports = itemRouter;
