// Teacher DAO that communicates with the database
import TeacherSchema from "../schemas/teacher.schema";
import Teacher from "../model/Teacher";

/**
 * Class that communicates with the database to perform CRUD operations
 */
export default class TeacherDAO {
  /**
   * Get all the teachers from the database
   * @returns a list with all the teachers
   */
  public static async getAllTeachers(): Promise<Teacher[]> {
    const teachers = await TeacherSchema.find().exec();
    return teachers.map((teacher) => new Teacher(teacher.toObject()));
  }

  /**
   * Get a teacher by its code
   * @param pCode code of the teacher
   * @returns the teacher with the given code
   */
  public static async getTeacherByCode(pCode: string): Promise<Teacher> {
    const teacher = await TeacherSchema.findOne({ id: pCode }).exec();
    return teacher ? new Teacher(teacher.toObject()) : null;
  }

  /**
   * Create a new teacher in the database
   * @param teacher the teacher to be created
   */
  public static async createTeacher(teacher: Teacher) {
    const newTeacher = await TeacherSchema.create(teacher);
  }

  /**
   * Update a teacher in the database
   * @param pCode code of the teacher
   * @param teacher the teacher with the new information
   */
  public static async updateTeacher(pCode: string, teacher: Teacher) {
    const updatedTeacher = await TeacherSchema.findOneAndUpdate(
      { id: pCode },
      teacher,
      {
        new: true,
      }
    ).exec();
  }

  /**
   * Delete a teacher from the database
   * @param pCode code of the teacher
   */
  public static async deleteTeacher(pCode: string) {
    const teacher = await TeacherSchema.findOneAndDelete({
      id: pCode,
    }).exec();
    return teacher ? teacher.toObject() : null;
  }

  /**
   * Get a all the teachers from a campus
   * @param campus campus of the teachers
   * @returns a list with all the teachers from the campus
   */
  public static async getTeachersByCampus(campus: string): Promise<Teacher[]> {
    const teachers = await TeacherSchema.find({
      id: { $regex: `^${campus}-` },
    }).exec();
    return teachers.map((teacher) => new Teacher(teacher.toObject()));
  }
}
