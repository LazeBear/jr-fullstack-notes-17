const { Router } = require('express');
const userRouter = require('./users');
const cartRouter = require('./carts');
const authGuard = require('../middleware/authGuard');
const itemRouter = require('./items');

const v1Router = Router();

v1Router.use('/users', userRouter);
v1Router.use('/carts', authGuard, cartRouter);
v1Router.use('/items', itemRouter);

module.exports = v1Router;
