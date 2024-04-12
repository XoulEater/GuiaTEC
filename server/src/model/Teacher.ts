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
    constructor(code: string, name: string, email: string, officePNumber: string, personalPNumber: string, photo: string, campus: Campus, isLeader: boolean, password: string) {
        super(code, name, email, password, photo, campus);
        this.officePNumber = officePNumber;
        this.personalPNumber = personalPNumber;
        this.isLeader = isLeader;
    }
    // Getters
    getOfficePNumber(): string {
        return this.officePNumber;
    }

    getPersonalPNumber(): string {
        return this.personalPNumber;
    }

    getIsLeader(): boolean {
        return this.isLeader;
    }

    // Setters
    setOfficePNumber(officePNumber: string): void {
        this.officePNumber = officePNumber;
    }

    setPersonalPNumber(personalPNumber: string): void {
        this.personalPNumber = personalPNumber;
    }


    setIsLeader(isLeader: boolean): void {
        this.isLeader = isLeader;
    }
}
    
