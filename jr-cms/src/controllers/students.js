const StudentModel = require('../models/student');

const getAllStudents = async (req, res) => {
  // db.students.find()
  const students = await StudentModel.find().exec();
  res.json(students);
};

const getStudentById = () => {};

const addStudent = async (req, res) => {
  const { firstName, lastName, email } = req.body;
  // data validation
  const student = new StudentModel({ firstName, lastName, email });
  await student.save();
  res.status(201).json(student);
};

const updateStudentById = () => {};

const deleteStudentById = () => {};

module.exports = {
  getAllStudents,
  getStudentById,
  addStudent,
  updateStudentById,
  deleteStudentById,
};
