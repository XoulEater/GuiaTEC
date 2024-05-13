"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Forum_1 = __importDefault(require("./Forum"));
const Message_1 = __importDefault(require("./Message"));
// Clase para crear actividad
class pdfActivity {
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
}
class imageActivity {
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
}
class NoFileActivity {
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
}
class ActivityFactory {
}
//# sourceMappingURL=ActivityFactory.js.map