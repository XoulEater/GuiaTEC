import Activity from "./Activity";
import WorkplanDTO from "../DTOs/workplan";

export default class Workplan {
  private id: string;
  private name: string;
  private description: string;
  private activities: Activity[];
  private year: number;
  private semester: number;

  // Constructor
  constructor(
    NameOrDTO: string | WorkplanDTO,
    description?: string,
    activities?: Activity[],
    year?: number,
    semester?: number
  ) {
    if (typeof NameOrDTO === "string") {
      this.name = NameOrDTO;
      this.description = description;
      this.activities = activities;
      this.year = year;
      this.semester = semester;
    } else {
      this.id = NameOrDTO._id.toString();
      this.name = NameOrDTO.name;
      this.description = NameOrDTO.description;
      this.activities = NameOrDTO.activities.map(
        (activityDTO) => new Activity(activityDTO)
      );
    }
  }

  // Getter and Setter for name
  getName(): string {
    return this.name;
  }

  setName(name: string): void {
    this.name = name;
  }

  // Getter and Setter for description
  getDescription(): string {
    return this.description;
  }

  setDescription(description: string): void {
    this.description = description;
  }

  // Getter and Setter for activities
  getActivities(): Activity[] {
    return this.activities;
  }

  setActivities(activities: Activity[]): void {
    this.activities = activities;
  }

  addActivity(activity: Activity): void {
    this.activities.push(activity);
  }

  getID(): string {
    return this.id;
  }

  updateActivity(activityID : string, activity: Activity): void {
    const index = this.activities.findIndex((activity) => activity.getID().toString() === activityID);    console.log(activityID);
    console.log(index);
    console.log (this.activities);
    this.activities[index] = activity;
  }
}
