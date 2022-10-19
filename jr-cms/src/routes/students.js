const { Router } = require('express');
const {
  getAllStudents,
  getStudentById,
  addStudent,
  updateStudentById,
  deleteStudentById,
  addStudentToCourse,
  removeStudentFromCourse,
} = require('../controllers/students');

const studentRouter = Router();

studentRouter.get('', getAllStudents);
studentRouter.get('/:id', getStudentById);
studentRouter.post('', addStudent);
studentRouter.put('/:id', updateStudentById);
studentRouter.delete('/:id', deleteStudentById);
// localhost:3000/v1/students      /634a97ab458600d5da2d9d1a/courses/COMP101
studentRouter.post('/:studentId/courses/:courseId', addStudentToCourse);
studentRouter.delete('/:studentId/courses/:courseId', removeStudentFromCourse);

module.exports = studentRouter;
