import ActivityDTO from "DTOs/activity";

export default class Activity {
  private id: string;
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
  private attachmentFile?: string;
  private forum?: string[];

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
    forum?: string[]
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
      //this.id = NameOrDTO._id.toString();
      this.id = "120";
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
      console.log("Bandera");
      // TODO: this.forum = NameOrDTO.forum;
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

  getID(): string {
    return this.id;
  }

  // Getter and Setter
}
