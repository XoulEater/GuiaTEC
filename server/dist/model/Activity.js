"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Forum_1 = __importDefault(require("./Forum"));
const Message_1 = __importDefault(require("./Message"));
const sendEmail_1 = __importDefault(require("../controllers/sendEmail"));
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
            this.id = NameOrDTO.id;
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
            if (NameOrDTO.forum) {
                const messages = NameOrDTO.forum.messages.map((messageDTO) => new Message_1.default(messageDTO));
                this.forum = new Forum_1.default(messages);
            }
            else {
                this.forum = new Forum_1.default();
            }
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
    getForum() {
        return this.forum;
    }
    setForum(forum) {
        this.forum = forum;
    }
    getID() {
        return this.id;
    }
    setID(id) {
        this.id = id;
    }
    getStatus() {
        return this.status;
    }
    setStatus(status) {
        this.status = status;
    }
    getPrevDays() {
        return this.prevDays;
    }
    getDate() {
        return this.date;
    }
    getReminderInterval() {
        return this.reminderInterval;
    }
    getPublishDate() {
        const publishDate = new Date();
        publishDate.setDate(this.date.getDate() - this.prevDays);
        return publishDate;
    }
    verify(today) {
        try {
            if (this.status == "Notificada" || this.status == "Publicada") {
                this.verifyNotify(today);
            }
            if (this.status == "Planeada") {
                this.verifyPublish(today);
            }
        }
        catch (error) {
            console.error(error);
        }
    }
    verifyPublish(today) {
        try {
            // get the date to publish
            const publishDate = this.getPublishDate();
            // if today is the day to publish
            if (today.getDate() == publishDate.getDate()) {
                this.setStatus("Publicada");
                "Published: " + this.name;
            }
        }
        catch (error) {
            console.error(error);
        }
    }
    verifyNotify(today) {
        try {
            // get the date to publish
            const publishDate = this.getPublishDate();
            // interval to notify
            let cont = this.reminderInterval;
            while (publishDate <= this.date && publishDate <= today) {
                // add the interval to the publish date
                publishDate.setDate(publishDate.getDate() + this.reminderInterval);
                if (this.reminderInterval === 0) {
                    continue;
                }
                // if today is the day to notify
                if (publishDate.getDate() == today.getDate()) {
                    this.setStatus("Notificada");
                    "Notified: " + this.name;
                    this.notify();
                    break;
                }
                // add the interval to the counter
                cont += this.reminderInterval;
            }
        }
        catch (error) {
            console.error(error);
        }
    }
    notify() {
        const email = sendEmail_1.default.getInstance();
        email.sendMail("ncqueescribir@gmail.com", // TODO: temporal email
        "Actividad: " + this.name, "Recuerde que tiene una actividad programada para " + this.date);
    }
}
exports.default = Activity;
//# sourceMappingURL=Activity.js.map