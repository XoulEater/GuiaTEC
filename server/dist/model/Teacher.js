"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(require("./User"));
class Teacher extends User_1.default {
    // Constructor, include the posibility to use TeacherDTO instead of all the parameters
    constructor(IDorDTO, name, email, password, campus, officePNumber, personalPNumber, isLeader, photo) {
        if (typeof IDorDTO === "string") {
            super(name, email, password, campus, "teacher", isLeader, photo, IDorDTO);
            this.officePNumber = officePNumber;
            this.personalPNumber = personalPNumber;
        }
        else {
            super(IDorDTO.name, IDorDTO.email, IDorDTO.password, IDorDTO.campus, "teacher", IDorDTO.isLeader, IDorDTO.photo, IDorDTO.id);
            this.officePNumber = IDorDTO.officePNumber;
            this.personalPNumber = IDorDTO.personalPNumber;
        }
    }
    // Getter and Setter for officePNumber
    getOfficePNumber() {
        return this.officePNumber;
    }
    setOfficePNumber(officePNumber) {
        this.officePNumber = officePNumber;
    }
    // Getter and Setter for personalPNumber
    getPersonalPNumber() {
        return this.personalPNumber;
    }
    setPersonalPNumber(personalPNumber) {
        this.personalPNumber = personalPNumber;
    }
}
exports.default = Teacher;
//# sourceMappingURL=Teacher.js.map