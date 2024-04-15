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
        return teachers.map((teacher) => teacher.toObject());
    }

    /**
     * Get a teacher by its code
     * @param code code of the teacher
     * @returns the teacher with the given code
     */
    public static async getTeacherByCode(code: string): Promise<Teacher> {
        const teacher = await TeacherSchema.findOne({ _id: code }).exec();
        return teacher ? teacher.toObject() : null;
    }

    /**
     * Create a new teacher in the database
     * @param teacher the teacher to be created
     * @returns the created teacher
     */
    public static async createTeacher(teacher: Teacher): Promise<Teacher> {
        const newTeacher = await TeacherSchema.create(teacher);
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
        teacher: Teacher
    ): Promise<Teacher> {
        const updatedTeacher = await TeacherSchema.findOneAndUpdate(
            { _id: code },
            teacher,
            {
                new: true,
            }
        ).exec();
        return updatedTeacher ? updatedTeacher.toObject() : null;
    }

    /**
     * Delete a teacher from the database
     * @param code code of the teacher
     * @returns the deleted teacher
     */
    public static async deleteTeacher(code: string): Promise<Teacher> {
        const teacher = await TeacherSchema.findOneAndDelete({
            _id: code,
        }).exec();
        return teacher ? teacher.toObject() : null;
    }

    /**
     * Get a all the teachers from a campus
     * @param campus campus of the teachers
     * @returns a list with all the teachers from the campus
     */
    public static async getTeachersByCampus(
        campus: string
    ): Promise<Teacher[]> {
        const teachers = await TeacherSchema.find({
            _id: { $regex: `^${campus}-` },
        }).exec();
        return teachers.map((teacher) => teacher.toObject());
    }
}
