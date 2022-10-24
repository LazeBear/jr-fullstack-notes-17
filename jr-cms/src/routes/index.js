const { Router } = require('express');
const studentRouter = require('./students');
const courseRouter = require('./courses');
const userRouter = require('./users');
const authGuard = require('../middleware/authGuard');
const isTeacher = require('../middleware/isTeacher');

const v1Router = Router();

v1Router.use('/students', studentRouter);
v1Router.use('/courses', authGuard, isTeacher, courseRouter);
v1Router.use('/users', userRouter);

module.exports = v1Router;
