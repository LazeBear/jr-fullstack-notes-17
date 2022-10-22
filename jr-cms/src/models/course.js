const { Schema, model } = require('mongoose');

// _id: string, name, description, students
// course code: ENGG1001
module.exports = model(
  'Course',
  new Schema(
    {
      _id: {
        type: String,
        uppercase: true,
        alias: 'code', // create virtual property -> code
      },
      name: {
        type: String,
        minLength: 5,
        required: true,
        unique: true,
      },
      description: {
        type: String,
        default: 'this is a description',
      },
      students: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Student',
        },
      ],
    },
    {
      toJSON: {
        versionKey: false,
      },
    }
  )
);

// course.code === course._id
// course.code = 1234 => course._id = 1234
