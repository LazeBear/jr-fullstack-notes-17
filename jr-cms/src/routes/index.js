const { Router } = require('express');
const studentRouter = require('./students');
const courseRouter = require('./courses');

const v1Router = Router();

v1Router.use('/students', studentRouter);
v1Router.use('/courses', courseRouter);

module.exports = v1Router;
