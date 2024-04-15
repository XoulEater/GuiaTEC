// Teacher Routes 

import express from 'express';
import { TeacherController } from '../controllers/teacherController';

const router = express.Router();

// instantiate the controller

router.get('/teachers/', TeacherController.getAllTeachers);

router.get('/teacher/:code', TeacherController.getTeacherByCode);

router.get('/teachers/campus/:campus', TeacherController.getTeachersByCampus);

router.post('/teacher/', TeacherController.createTeacher);

router.put('/teacher/:code', TeacherController.updateTeacher);

router.delete('/teacher/:code', TeacherController.deleteTeacher);

export default router;


