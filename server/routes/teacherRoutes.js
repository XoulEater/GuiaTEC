const express = require('express');
const router = express.Router();
const User = require('../schemas/teacherSchema');
const { registerTeacher } = require('../controllers/teacherController');

