"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Activity {
    // Constructor
    constructor(NameOrDTO, week, date, prevDays, reminderInterval, responsibles, type, modality, status, link, attachmentFile, forum) {
        if (typeof NameOrDTO === "string") {
            this.name = NameOrDTO;
            this.week = week;
            this.date = date;
            this.prevDays = prevDays;
            this.reminderInterval = reminderInterval;
            this.responsibles = responsibles;
            this.type = type;
            this.modality = modality;
            this.status = status;
            this.link = link;
            this.attachmentFile = attachmentFile;
            this.forum = forum;
        }
        else {
            //this.id = NameOrDTO._id.toString();
            this.id = NameOrDTO._id;
            this.name = NameOrDTO.name;
            this.week = NameOrDTO.week;
            this.date = NameOrDTO.date;
            this.prevDays = NameOrDTO.prevDays;
            this.reminderInterval = NameOrDTO.reminderInterval;
            this.responsibles = NameOrDTO.responsibles;
            this.type = NameOrDTO.type;
            this.modality = NameOrDTO.modality;
            this.status = NameOrDTO.status;
            this.link = NameOrDTO.link;
            this.attachmentFile = NameOrDTO.attachmentFile;
            //this.forum = NameOrDTO.forum;
        }
    }
    // Getter and Setter for name
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    // Getter and Setter for week
    getWeek() {
        return this.week;
    }
    setWeek(week) {
        this.week = week;
    }
    getID() {
        return this.id;
    }
}
exports.default = Activity;
//# sourceMappingURL=Activity.js.map