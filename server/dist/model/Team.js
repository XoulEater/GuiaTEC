"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// TODO: delete this file
class Team {
    constructor() {
        this.name = "Equipo Guia";
        this.description = "Este es el equipo guia del Instituto Tecnologico de Costa Rica";
        this.workPlans = [];
        this.members = [];
    }
    static getInstance() {
        if (!Team.instance) {
            Team.instance = new Team();
        }
        return Team.instance;
    }
    getName() {
        return this.name;
    }
    getDescription() {
        return this.description;
    }
    getWorkPlans() {
        return this.workPlans;
    }
    getMembers() {
        return this.members;
    }
    setWorkPlans(workPlans) {
        this.workPlans = workPlans;
    }
    setMembers(members) {
        this.members = members;
    }
}
exports.default = Team;
//# sourceMappingURL=Team.js.map