const Joi = require('joi');
const CourseModel = require('../models/course');

const getAllCourses = async (req, res) => {
  const courses = await CourseModel.find().exec();
  res.json(courses);
};

const getCourseById = async (req, res) => {
  const { id } = req.params;
  const course = await CourseModel.findById(id).exec();
  if (!course) {
    res.status(404).json({ error: 'Course not found' });
    return;
  }
  res.json(course);
};

const addCourse = async (req, res) => {
  // const { code, name, description } = req.body;
  const schema = Joi.object({
    name: Joi.string().min(2).max(10).required(),
    // COMP101, SCI202
    code: Joi.string()
      .regex(/^[a-zA-Z]+[0-9]+$/)
      .message('invalid code format')
      .required(),
    description: Joi.string(),
  });
  const { code, name, description } = await schema.validateAsync(req.body, {
    allowUnknown: true,
    stripUnknown: true,
  });

  const existingCourse = await CourseModel.findById(code).exec();
  if (existingCourse) {
    res.status(409).json({ error: 'duplicate course code' });
    return;
  }
  const course = new CourseModel({ code, name, description });
  await course.save();
  res.status(201).json(course);
};

const updateCourseById = async (req, res) => {
  const { id } = req.params;
  // const { name, description } = req.body;

  const schema = Joi.object({
    name: Joi.string().min(2).max(10).required(),
    description: Joi.string(),
  });
  const { name, description } = await schema.validateAsync(req.body, {
    allowUnknown: true,
    stripUnknown: true,
  });
  // data validation
  const course = await CourseModel.findByIdAndUpdate(
    id,
    { name, description },
    { new: true }
  ).exec();
  if (!course) {
    res.status(404).json({ error: 'Course not found' });
    return;
  }
  res.json(course);
};

const deleteCourseById = async (req, res) => {
  const { id } = req.params;
  const course = await CourseModel.findByIdAndDelete(id).exec();
  if (!course) {
    res.status(404).json({ error: 'Course not found' });
    return;
  }
  res.sendStatus(204);
};

module.exports = {
  getAllCourses,
  getCourseById,
  addCourse,
  updateCourseById,
  deleteCourseById,
};
