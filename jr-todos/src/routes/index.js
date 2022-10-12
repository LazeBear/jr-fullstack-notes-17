const express = require('express');
const taskRouter = require('./tasks');

const v1Router = express.Router();

// GET /tasks/1
v1Router.use('/tasks', taskRouter);

module.exports = v1Router;
