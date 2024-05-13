import ActivityDTO from "../DTOs/activity";
import Forum from "./Forum";
import Message from "./Message";
import Email from "../controllers/sendEmail";

// Interface activity

export default interface Activity {
  id: number;
  name: string;
  week: number;
  date: Date;
  prevDays: number;
  reminderInterval: number;
  responsibles: string[];
  type: string;
  modality: string;
  status: string;
  link?: string;
  attachmentFile?: string;
  forum?: Forum;
}
// Clase para crear actividad

class pdfActivity implements Activity {
  id: number;
  name: string;
  week: number;
  date: Date;
  prevDays: number;
  reminderInterval: number;
  responsibles: string[];
  type: string;
  modality: string;
  status: string;
  link?: string;
  attachmentFile?: string;
  forum?: Forum;

  constructor(
    NameOrDTO: string | ActivityDTO,
    week?: number,
    date?: Date,
    prevDays?: number,
    reminderInterval?: number,
    responsibles?: string[],
    type?: string,
    modality?: string,
    status?: string,
    link?: string,
    attachmentFile?: string,
    forum?: Forum
  ) {
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
    } else {
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
        const messages = NameOrDTO.forum.messages.map(
          (messageDTO) => new Message(messageDTO)
        );
        this.forum = new Forum(messages);
      } else {
        this.forum = new Forum();
      }
    }
  }
}

class imageActivity implements Activity {
  id: number;
  name: string;
  week: number;
  date: Date;
  prevDays: number;
  reminderInterval: number;
  responsibles: string[];
  type: string;
  modality: string;
  status: string;
  link?: string;
  attachmentFile?: string;
  forum?: Forum;

  constructor(
    NameOrDTO: string | ActivityDTO,
    week?: number,
    date?: Date,
    prevDays?: number,
    reminderInterval?: number,
    responsibles?: string[],
    type?: string,
    modality?: string,
    status?: string,
    link?: string,
    attachmentFile?: string,
    forum?: Forum
  ) {
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
    } else {
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
        const messages = NameOrDTO.forum.messages.map(
          (messageDTO) => new Message(messageDTO)
        );
        this.forum = new Forum(messages);
      } else {
        this.forum = new Forum();
      }
    }
  }
}

class NoFileActivity implements Activity {
  id: number;
  name: string;
  week: number;
  date: Date;
  prevDays: number;
  reminderInterval: number;
  responsibles: string[];
  type: string;
  modality: string;
  status: string;
  link?: string;
  attachmentFile?: string;
  forum?: Forum;

  constructor(
    NameOrDTO: string | ActivityDTO,
    week?: number,
    date?: Date,
    prevDays?: number,
    reminderInterval?: number,
    responsibles?: string[],
    type?: string,
    modality?: string,
    status?: string,
    link?: string,
    attachmentFile?: string,
    forum?: Forum
  ) {
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
    } else {
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
        const messages = NameOrDTO.forum.messages.map(
          (messageDTO) => new Message(messageDTO)
        );
        this.forum = new Forum(messages);
      } else {
        this.forum = new Forum();
      }
    }
  }
}

class ActivityFactory { }