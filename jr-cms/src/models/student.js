const { Schema, model } = require('mongoose');
const Joi = require('joi');

/**
 * firstName
 * lastName
 * email
 * courses
 */
const schema = new Schema(
  {
    firstName: {
      type: String,
      minLength: 2,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      validate: [
        {
          validator: (email) => {
            // regex
            // Joi, yup, validator.js, express-validator
            // const validation = Joi.string().email().validate(email);
            // const { error } = validation;
            // if (error) {
            //   // false means validation failed
            //   return false;
            // }
            // return true;
            return !Joi.string().email().validate(email).error;
          },
          msg: 'Invalid email format',
        },
      ],
    },
    courses: [
      {
        type: String,
        ref: 'Course',
      },
    ],
  },
  {
    timestamps: true,
    // toJSON: {
    //   virtuals: true,
    // },
  }
);

// schema.virtual('full name').get(function () {
//   return `${this.firstName} ${this.lastName}`;
// });

const StudentModel = model('Student', schema);

module.exports = StudentModel;
