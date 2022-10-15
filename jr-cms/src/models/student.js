const { Schema, model } = require('mongoose');

/**
 * firstName
 * lastName
 * email
 * courses
 */
const schema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

const StudentModel = model('Student', schema);

module.exports = StudentModel;
