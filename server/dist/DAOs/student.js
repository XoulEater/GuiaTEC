"use strict";
// Student DAO that communicates with the database
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const student_schema_1 = __importDefault(require("../schemas/student.schema"));
const Student_1 = __importDefault(require("../model/Student"));
class StudentDAO {
    /**
     * Create a new student in the database
     * @param pStudentDTO the student to be created
  
     */
    static createStudent(student) {
        return __awaiter(this, void 0, void 0, function* () {
            yield student_schema_1.default.create(student);
        });
    }
    /**
     * Create multiple students in the database
     * @param students the students to be created
     */
    static createStudents(students) {
        return __awaiter(this, void 0, void 0, function* () {
            yield student_schema_1.default.insertMany(students);
        });
    }
    /**
     * Get all the students from the database
     * @returns the student with the given carnet
     */
    static getAllStudents() {
        return __awaiter(this, void 0, void 0, function* () {
            const studentData = yield student_schema_1.default.find().exec();
            return studentData.map((studentData) => new Student_1.default(studentData.toObject()));
        });
    }
    /**
     * Get all the students for a given campus
     * @param campus campus of the students
     * @returns a list with all the students
     */
    static getStudentsByCampus(campus) {
        return __awaiter(this, void 0, void 0, function* () {
            const studentsData = yield student_schema_1.default.find({ campus: campus });
            return studentsData.map((studentData) => new Student_1.default(studentData.toObject()));
        });
    }
    /**
     * Update a student in the database
     * @param carnet carnet of the student
     * @param student the student with the new information
     */
    static updateStudent(carnet, student) {
        return __awaiter(this, void 0, void 0, function* () {
            yield student_schema_1.default.findOneAndUpdate({ carnet: carnet }, student, {
                new: true,
            });
        });
    }
    /**
     * Delete a student from the database
     * @param carnet carnet of the student
     * @returns the deleted student
     */
    static deleteStudent(carnet) {
        return __awaiter(this, void 0, void 0, function* () {
            yield student_schema_1.default.findOneAndDelete({
                carnet: carnet,
            });
        });
    }
}
exports.default = StudentDAO;
//# sourceMappingURL=student.js.map