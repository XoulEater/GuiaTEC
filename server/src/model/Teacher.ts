import Campus from "./campusENUM";
import User from "./User";

export default class Teacher extends User {
    private officePNumber: string;
    private personalPNumber: string;
    private isLeader: boolean;
    private userType: "teacher";

    // Constructor
    constructor(
        _id: string,
        name: string,
        email: string,
        password: string,
        campus: Campus,
        officePNumber: string,
        personalPNumber: string,
        isLeader: boolean,
        userType: "teacher",
        photo?: string
    ) {
        super(_id, name, email, password, photo, campus);
        this.officePNumber = officePNumber;
        this.personalPNumber = personalPNumber;
        this.isLeader = isLeader;
        this.userType = userType;
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
