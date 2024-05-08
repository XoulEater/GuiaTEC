"use strict";
// User OOP class
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    // Constructor
    constructor(name, email, password, campus, userType, isLeader, photo, id) {
        this.isLeader = false;
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.photo = photo;
        this.campus = campus;
        this.userType = userType;
        this.isLeader = isLeader;
    }
    // Getters
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    getEmail() {
        return this.email;
    }
    getPassword() {
        return this.password;
    }
    getPhoto() {
        return this.photo;
    }
    getCampus() {
        return this.campus;
    }
    // Setters
    setId(id) {
        this.id = id;
    }
    setName(name) {
        this.name = name;
    }
    setEmail(email) {
        this.email = email;
    }
    setPassword(password) {
        this.password = password;
    }
    setPhoto(photo) {
        this.photo = photo;
    }
    setCampus(campus) {
        this.campus = campus;
    }
}
exports.default = User;
//# sourceMappingURL=User.js.map