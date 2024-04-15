// Student DAO that communicates with the database

import StudentSchema from '../schemas/student.schema';
import Student from 'model/student';

export default class StudentDAO {

    /** 
     * Create a new student in the database
     * @param pStudent the student to be created
     * @returns the created student
     */
    public static async createStudent(pStudent: Student): Promise<Student> {
        const student = new StudentSchema(pStudent);
        await student.save();
        return pStudent;
    }

    /**
     * Get all the students from the database
     * @param carnet carnet of the student
     * @returns the student with the given carnet
     */
    public static async getStudentByCarnet(carnet: string): Promise<Student> {
        const student = await StudentSchema.findOne({ carnet: carnet });
        return student ? student.toObject() : null;
    }

    /**
     * Get all the students for a given campus
     * @param campus campus of the students
     * @returns a list with all the students
     */
    public static async getStudentsByCampus(campus: string): Promise<Student[]> {
        const students = await StudentSchema.find({ campus: campus });
        return students.map(student => student.toObject());
    }

    /**
     * Update a student in the database
     * @param carnet carnet of the student
     * @param pStudent the student with the new information
     * @returns the updated student
     */
    public static async updateStudent(carnet: string, pStudent: Student): Promise<Student> {
        const student = await StudentSchema.findOneAndUpdate({ carnet: carnet }, pStudent, { new: true });
        return student ? student.toObject() : null;
    }

    /**
     * Delete a student from the database
     * @param carnet carnet of the student
     * @returns the deleted student
     */
    public static async deleteStudent(carnet: string): Promise<void> {
        const student = await StudentSchema.findOneAndDelete({ carnet: carnet });
        return student ? student.toObject() : null;
    }
}