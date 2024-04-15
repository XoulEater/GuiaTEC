// Teacher OOP class

import Campus from './campusENUM';
import User from './User';
import TeacherDTO from '../DTOs/teacherDTO';


export class Teacher extends User {
    private officePNumber: string;
    private personalPNumber: string;
    private isLeader: boolean;
    private userType: 'teacher';

    // Constructor
    constructor(codeOrDTO: string | TeacherDTO, name?: string, email?: string, officePNumber?: string, personalPNumber?: string, photo?: string, campus?: Campus, isLeader?: boolean, password?: string) {
        if (typeof codeOrDTO === 'string') {
            super(codeOrDTO, name!, email!, password!, photo!, campus!);
            this.officePNumber = officePNumber!;
            this.personalPNumber = personalPNumber!;
            this.isLeader = isLeader!;
        } else {
            const teacherDTO = codeOrDTO;
            super(teacherDTO._id, teacherDTO.name, teacherDTO.email, teacherDTO.password, teacherDTO.photo, teacherDTO.campus);
            this.officePNumber = teacherDTO.officePNumber;
            this.personalPNumber = teacherDTO.personalPNumber;
            this.isLeader = teacherDTO.isLeader;
        }
    }

    // Getter and Setter for officePNumber
    getOfficePNumber(): string {
        return this.officePNumber;
    }

    setOfficePNumber(officePNumber: string): void {
        this.officePNumber = officePNumber;
    }

    // Getter and Setter for personalPNumber
    getPersonalPNumber(): string {
        return this.personalPNumber;
    }

    setPersonalPNumber(personalPNumber: string): void {
        this.personalPNumber = personalPNumber;
    }

    // Getter and Setter for isLeader
    getIsLeader(): boolean {
        return this.isLeader;
    }

    setIsLeader(isLeader: boolean): void {
        this.isLeader = isLeader;
    }
}
    
