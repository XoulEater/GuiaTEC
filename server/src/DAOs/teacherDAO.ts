// Teacher DAO that communicates with the database

import Teacher from '../schemas/teacher.schema';
import TeacherDTO  from '../DTOs/teacherDTO';
import Campus from 'model/campusENUM';

/**
 * Class that communicates with the database to perform CRUD operations
 */
export class TeacherDAO {
  /**
   * Get all the teachers from the database
   * @returns a list with all the teachers
   */
  public static async getAllTeachers(): Promise<TeacherDTO[]> {
    const teachers = await Teacher.find().exec();
    return teachers.map(teacher => teacher.toObject());
  }

  /**
   * Get a teacher by its code
   * @param code code of the teacher
   * @returns the teacher with the given code
   */
  public static async getTeacherByCode(code: string): Promise<TeacherDTO> {
    const teacher = await Teacher.findOne({ _id: code }).exec();
    return teacher ? teacher.toObject() : null;
  }

  /**
   * Create a new teacher in the database
   * @param teacher the teacher to be created
   * @returns the created teacher
   */
  public static async createTeacher(teacher: TeacherDTO): Promise<TeacherDTO> {
    const newTeacher = await Teacher.create(teacher);
    return newTeacher.toObject();
  }

  /**
   * Update a teacher in the database
   * @param code code of the teacher
   * @param teacher the teacher with the new information
   * @returns the updated teacher
   */
  public static async updateTeacher(
    code: string,
    teacher: TeacherDTO
  ): Promise<TeacherDTO> {
    const updatedTeacher = await Teacher.findOneAndUpdate({ _id: code }, teacher, {
      new: true,
    }).exec();
    return updatedTeacher ? updatedTeacher.toObject() : null;
  }

  /**
   * Delete a teacher from the database
   * @param code code of the teacher
   * @returns the deleted teacher
   */
  public static async deleteTeacher(code: string): Promise<TeacherDTO> {
    const teacher = await Teacher.findOneAndDelete({ _id: code }).exec();
    return teacher ? teacher.toObject() : null;
  }

  /**
   * Get a all the teachers from a campus
   * @param campus campus of the teachers
   * @returns a list with all the teachers from the campus
   */
  public static async getTeachersByCampus(campus: string): Promise<TeacherDTO[]> {
    const teachers = await Teacher.find({ _id: { $regex: `^${campus}-` } }).exec();
    return teachers.map(teacher => teacher.toObject());
  }
}