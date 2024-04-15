// Excel Controller that handles the requests related to excel files
// uses the StudentDAO to perform the operations

import { Request, Response } from "express";
import StudentDAO from "../DAOs/studentDAO";
import Student from "../model/Student";
import CampusENUM from "../model/campusENUM";
// excel import
import * as xlsx from "xlsx";

/**
 * Class that handles the requests related to excel files
 */

export class ExcelController {
    /**
     * Download an excel file with the students from a campus
     * @param req the request
     * @param res the response
     */
    public static async downloadStudents(
        req: Request,
        res: Response
    ): Promise<void> {
        const campus = req.params.campus;
        const students = await StudentDAO.getStudentsByCampus(campus);

        // Create the excel file
        // cols: carnet, fullName, email, phone
        const wb = xlsx.utils.book_new();
        const ws = xlsx.utils.json_to_sheet(students);
        // TODO: remove unnecessary columns
        xlsx.utils.book_append_sheet(wb, ws, "Students");
        const excelFileName = `students-${campus}.xlsx`;
        xlsx.writeFile(wb, excelFileName);

        res.download(excelFileName);
    }

    /**
     * Download an excel file with a sheet for each campus
     * @param req the request
     * @param res the response
     */
    public static async downloadAllStudents(
        req: Request,
        res: Response
    ): Promise<void> {
        // Create the excel file
        const wb = xlsx.utils.book_new();

        // Create a sheet for each campus
        const campuses = Object.values(CampusENUM);
        await Promise.all(
            campuses.map(async (campus) => {
                // Get the students for the campus
                const campusStudents = await StudentDAO.getStudentsByCampus(
                    campus
                );
                const ws = xlsx.utils.json_to_sheet(campusStudents);
                xlsx.utils.book_append_sheet(wb, ws, campus);
            })
        );

        const excelFileName = `students-all.xlsx`;
        xlsx.writeFile(wb, excelFileName);
        res.download(excelFileName);
    }

    /**
     * Upload an excel file with students using multer middleware
     * @param req the request
     * @param res the response
     */
    public static async uploadStudents(
        req: Request,
        res: Response
    ): Promise<void> {
        // Get the file
        const file = req.file;
        if (!file) {
            res.status(400).send("No file uploaded");
            return;
        }
        const campus = req.body.campus;

        // Read the excel file
        const wb = xlsx.readFile(file.path);
        const ws = wb.Sheets[wb.SheetNames[0]];
        const students = xlsx.utils.sheet_to_json(ws) as Student[];

        // Create the students
        const newStudents = students.map(
            (student) =>
                new Student(
                    student.getCarnet(),
                    student.getName(),
                    student.getEmail(),
                    student.getPhoneNumber(),
                    campus
                )
        );
        await StudentDAO.createStudents(newStudents);

        res.send("File uploaded");
    }
}
