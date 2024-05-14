import ActivityDTO from "../DTOs/activity";
import Forum from "./Forum";
import Message from "./Message";
import Email from "../controllers/sendEmail";

export default class Activity {
  private id: number;
  private name: string;
  private week: number;
  private date: Date;
  private prevDays: number;
  private reminderInterval: number;
  private responsibles: string[];
  private type: string;
  private modality: string;
  private status: string;
  private link?: string;
  private evidence?: string[] = [];
  private attachmentFile?: string;
  private forum?: Forum;
  private observation?: string;

  // Constructor
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
    forum?: Forum,
    observation?: string
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
      this.observation = observation;
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
      this.evidence = NameOrDTO.evidence;
      this.observation = NameOrDTO.observation;
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

  // Getter and Setter for name
  getName(): string {
    return this.name;
  }

  setName(name: string): void {
    this.name = name;
  }

  // Getter and Setter for week
  getWeek(): number {
    return this.week;
  }

  setWeek(week: number): void {
    this.week = week;
  }

  getForum(): Forum {
    return this.forum;
  }

  setForum(forum: Forum): void {
    this.forum = forum;
  }

  getID(): number {
    return this.id;
  }

  setID(id: number): void {
    this.id = id;
  }

  getStatus(): string {
    return this.status;
  }

  setStatus(status: string): void {
    this.status = status;
  }

  getPrevDays(): number {
    return this.prevDays;
  }

  getDate(): Date {
    return this.date;
  }

  getReminderInterval(): number {
    return this.reminderInterval;
  }

  getPublishDate(): Date {
    const publishDate = new Date();
    publishDate.setDate(this.date.getDate() - this.prevDays);
    return publishDate;
  }

  verify(today: Date): void {
    try {
      if (this.status == "Notificada" || this.status == "Publicada") {
        this.verifyNotify(today);
      }
      if (this.status == "Planeada") {
        this.verifyPublish(today);
      }
    } catch (error) {
      console.error(error);
    }
  }

  verifyPublish(today: Date): void {
    try {
      // get the date to publish
      const publishDate = this.getPublishDate();

      // if today is the day to publish
      if (today.getDate() == publishDate.getDate()) {
        this.setStatus("Publicada");
        "Published: " + this.name;
      }
    } catch (error) {
      console.error(error);
    }
  }

  verifyNotify(today: Date): void {
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
    } catch (error) {
      console.error(error);
    }
  }

  notify(): void {
    const email = Email.getInstance();
    email.sendMail(
      "ncqueescribir@gmail.com", // TODO: temporal email
      "Actividad: " + this.name,
      "Recuerde que tiene una actividad programada para " + this.date
    );
  }
}
