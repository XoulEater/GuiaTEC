// Teacher Controller that handles the requests related to teachers 
// uses the TeacherDAO to perform the operations

import { Request, Response } from 'express';
import { TeacherDAO } from '../DAOs/teacherDAO';
import Teacher from '../model/Teacher';


/**
 * Class that handles the requests related to teachers
 */
export class TeacherController {
  /**
   * Get all the teachers
   * @param req the request
   * @param res the response
   */
  public static async getAllTeachers(req: Request, res: Response): Promise<void> {
    const teachers = await TeacherDAO.getAllTeachers();
    res.json(teachers);
  }

  /**
   * Get all the teachers from a campus
   * @param req the request
   * @param res the response
   */
  public static async getTeachersByCampus(req: Request, res: Response): Promise<void> {
    const campus = req.params.campus;
    const teachers = await TeacherDAO.getTeachersByCampus(campus);
    res.json(teachers);
  }
  /**
   * Get a teacher by its code
   * @param req the request
   * @param res the response
   */
  public static async getTeacherByCode(req: Request, res: Response): Promise<void> {
    const code = req.params.code;
    const teacher = await TeacherDAO.getTeacherByCode(code);
    res.json(teacher);
  }

  /**
   * Create a new teacher
   * @param req the request
   * @param res the response
   */
  public static async createTeacher(req: Request, res: Response): Promise<void> {
    const teacher: Teacher = req.body;
    // Generate the code of the teacher (e.g. AL-01)
    const campus = teacher.getCampus();
    const teachers = await TeacherDAO.getTeachersByCampus(campus);
    const lastTeacher = teachers[teachers.length - 1];
    const lastCode = lastTeacher ? lastTeacher.getId() : `${campus}-00`;
    const lastNumber = parseInt(lastCode.split('-')[1]);
    const newNumber = lastNumber + 1;
    const code = `${campus}-${newNumber.toString().padStart(2, '0')}`;
    teacher.setId(code);
    console.log(teacher); 

    const newTeacher = await TeacherDAO.createTeacher(teacher);
    res.json(newTeacher);
  }

  /**
   * Update a teacher
   * @param req the request
   * @param res the response
   */
  public static async updateTeacher(req: Request, res: Response): Promise<void> {
    const code = req.params.code;
    const teacher: Teacher = req.body;
    const updatedTeacher = await TeacherDAO.updateTeacher(code, teacher);
    res.json(updatedTeacher);
  }

  /**
   * Delete a teacher
   * @param req the request
   * @param res the response
   */
  public static async deleteTeacher(req: Request, res: Response): Promise<void> {
    const code = req.params.code;
    const teacher = await TeacherDAO.deleteTeacher(code);
    res.json(teacher);
  }
}
