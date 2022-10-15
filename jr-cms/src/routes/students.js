const { Router } = require('express');
const {
  getAllStudents,
  getStudentById,
  addStudent,
  updateStudentById,
  deleteStudentById,
} = require('../controllers/students');

const studentRouter = Router();

studentRouter.get('', getAllStudents);
studentRouter.get('/:id', getStudentById);
studentRouter.post('', addStudent);
studentRouter.get('/:id', deleteStudentById);
studentRouter.delete('/:id', updateStudentById);

module.exports = studentRouter;
