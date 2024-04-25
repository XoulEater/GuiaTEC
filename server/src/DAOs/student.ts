// Student DAO that communicates with the database

import StudentSchema from "../schemas/student.schema";
import Student from "../model/Student";

export default class StudentDAO {
  /**
   * Create a new student in the database
   * @param pStudentDTO the student to be created

   */
  public static async createStudent(student: Student) {
    await StudentSchema.create(student);
  }

  /**
   * Create multiple students in the database
   * @param students the students to be created
   */
  public static async createStudents(students: Student[]) {
    await StudentSchema.insertMany(students);
  }

  /**
   * Get all the students from the database
   * @returns the student with the given carnet
   */
  public static async getAllStudents(): Promise<Student[]> {
    const studentData = await StudentSchema.find().exec();
    return studentData.map(
      (studentData) => new Student(studentData.toObject())
    );
  }

  /**
   * Get all the students for a given campus
   * @param campus campus of the students
   * @returns a list with all the students
   */
  public static async getStudentsByCampus(campus: string): Promise<Student[]> {
    const studentsData = await StudentSchema.find({ campus: campus });
    return studentsData.map(
      (studentData) => new Student(studentData.toObject())
    );
  }

  /**
   * Update a student in the database
   * @param carnet carnet of the student
   * @param student the student with the new information
   */
  public static async updateStudent(carnet: string, student: Student) {
    await StudentSchema.findOneAndUpdate({ carnet: carnet }, student, {
      new: true,
    });
  }

  /**
   * Delete a student from the database
   * @param carnet carnet of the student
   * @returns the deleted student
   */
  public static async deleteStudent(carnet: string) {
    await StudentSchema.findOneAndDelete({
      carnet: carnet,
    });
  }
}
