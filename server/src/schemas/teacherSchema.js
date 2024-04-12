const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const teacherSchema = new Schema({
  code: {
    type: String,
    required: true
  },

  officeNumber: {
    type: String,
    required: true
  },
  
  personalNumber: {
    type: String,
    required: true
  }, 

  photo: {
    type: String,
    required: true
  },  

  campus: {
    type: String,
    required: true
  },  

  isLeader: {
    type: Boolean,
    required: true
  }
  }, 
  {
    timestamps: true  
  }
);

module.exports = mongoose.model('Teacher', teacherSchema, 'Teacher');

