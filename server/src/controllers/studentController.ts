import { Request, Response } from "express";
import StudentDAO from "../DAOs/student";
import Student from "../model/Student";

// Student Controller that handles the requests related to students
// uses the studentDAO to perform the operations

/**
 * Class that handles the requests related to students
 */
export class StudentController {
  /**
   * Get all the Students
   * @param req the request
   * @param res the response
   */
  public static async getAllStudents(
    req: Request,
    res: Response
  ): Promise<void> {
    try {
      const students = await StudentDAO.getAllStudents();
      res.status(200).json(students);
    } catch (error) {
      res.status(500).json({ error: "Error getting students" });
    }
  }

  /**
   * Get all the students from a campus
   * @param req the request
   * @param res the response
   */
  public static async getStudentsByCampus(
    req: Request,
    res: Response
  ): Promise<void> {
    try {
      const campus = req.params.campus;
      const students = await StudentDAO.getStudentsByCampus(campus);
      res.status(200).json(students);
    } catch (error) {
      res.status(500).json({ error: "Error getting students" });
    }
  }

  /**
   * Delete a student
   * @param req the request
   * @param res the response
   */
  public static async deleteStudent(
    req: Request,
    res: Response
  ): Promise<void> {
    try {
      const carnet = req.params.code;
      await StudentDAO.deleteStudent(carnet);
      res.status(200).json({ message: "Student deleted" });
    } catch (error) {
      res.status(500).json({ error: "Error deleting student" });
    }
  }

  /**
   * Update a student
   * @param req the request
   * @param res the response
   */
  public static async updateStudent(
    req: Request,
    res: Response
  ): Promise<void> {
    try {
      const carnet = req.params.code;
      const student: Student = req.body;
      await StudentDAO.updateStudent(carnet, student);
      res.status(200).json({ message: "Student updated" });
    } catch (error) {
      res.status(500).json({ error: "Error updating student" });
    }
  }
}
