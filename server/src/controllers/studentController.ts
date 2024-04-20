// Student Controller that handles the requests related to students
// uses the studentDAO to perform the operations

import { Request, Response } from "express";
import StudentDAO from "../DAOs/student";
import Student from "../model/Student";

/**
 * Class that handles the requests related to students
 */
export class StudentController{

    /**
     * Get all the Students
     * @param req the request
     * @param res the response
     */
    public static async getAllStudents(
        req: Request,
        res: Response
    ): Promise<void> {
        const students = await StudentDAO.getAllStudents();
        res.json(students);
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
        const campus = req.params.campus;
        const students = await StudentDAO.getStudentsByCampus(campus);
        res.json(students);
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
        const carnet = req.params.code;
        const student = await StudentDAO.deleteStudent(carnet);
        res.json(student);
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
        const carnet = req.params.code;
        const student: Student = req.body;
        const updatedStudent= await StudentDAO.updateStudent(carnet, student);
        res.json(updatedStudent);
    }
}



