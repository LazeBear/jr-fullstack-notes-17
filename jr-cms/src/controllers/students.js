const StudentModel = require('../models/student');
const CourseModel = require('../models/course');

const getAllStudents = async (req, res) => {
  // db.students.find()
  const students = await StudentModel.find().exec();
  res.json(students);
};

const getStudentById = async (req, res) => {
  const { id } = req.params;
  const student = await StudentModel.findById(id)
    .populate('courses', 'name')
    .exec();
  if (!student) {
    res.status(404).json({ error: 'student not found' });
    return;
  }
  res.json(student);
};

const addStudent = async (req, res) => {
  const { firstName, lastName, email } = req.body;
  // data validation
  const student = new StudentModel({ firstName, lastName, email });
  await student.save();
  res.status(201).json(student);
};

const updateStudentById = async (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, email } = req.body;
  // data validation
  const student = await StudentModel.findByIdAndUpdate(
    id,
    { firstName, lastName, email },
    { new: true } // runValidators: true
  ).exec();
  // const student = await StudentModel.findById(id).exec();
  if (!student) {
    res.status(404).json({ error: 'student not found' });
    return;
  }

  // student.firstName = firstName;
  // await student.save();

  res.json(student);
};

const deleteStudentById = async (req, res) => {
  const { id } = req.params;
  const student = await StudentModel.findByIdAndDelete(id).exec();
  if (!student) {
    res.status(404).json({ error: 'student not found' });
    return;
  }
  await CourseModel.updateMany(
    { students: id },
    {
      $pull: {
        students: id,
      },
    }
  ).exec();
  // await AddressModel.updateMany(
  //   { students: id },
  //   {
  //     $pull: {
  //       students: id,
  //     },
  //   }
  // ).exec();
  res.sendStatus(204);
};

// POST /v1/students/:studentId/courses/:courseId
// POST /v1/students/:id/courses/:code
const addStudentToCourse = async (req, res) => {
  // get student and course id, from route
  const { studentId, courseId } = req.params;
  // find student document and course document with id
  const student = await StudentModel.findById(studentId).exec();
  const course = await CourseModel.findById(courseId).exec();
  // check if student and course exists
  // if (!(student && course))
  if (!student || !course) {
    res.status(404).json({ error: 'student or course not found' });
    return;
  }
  // add student to course.students
  // await CourseModel.findByIdAndUpdate();
  course.students.addToSet(studentId);
  await course.save();
  // add course to student.courses
  const updatedStudent = await StudentModel.findByIdAndUpdate(
    studentId,
    { $addToSet: { courses: courseId } },
    { new: true }
  );
  // return response
  res.json(updatedStudent);
};

/**
 * A,B
 * A B - 1:M
 * B A - 1:1
 * A.B = [] <- push
 * B.A
 *
 */

const removeStudentFromCourse = async (req, res) => {
  // get student and course id, from route
  const { studentId, courseId } = req.params;
  // find student document and course document with id
  let student = await StudentModel.findById(studentId).exec();
  const course = await CourseModel.findById(courseId).exec();
  // check if student and course exists
  // if (!(student && course))
  if (!student || !course) {
    res.status(404).json({ error: 'student or course not found' });
    return;
  }
  student = await StudentModel.findByIdAndUpdate(
    studentId,
    {
      $pull: {
        courses: courseId,
      },
    },
    { new: true }
  ).exec();
  await CourseModel.findByIdAndUpdate(courseId, {
    $pull: { students: studentId },
  }).exec();

  res.json(student);
};

module.exports = {
  getAllStudents,
  getStudentById,
  addStudent,
  updateStudentById,
  deleteStudentById,
  addStudentToCourse,
  removeStudentFromCourse,
};
