import Activity from "./Activity";
export default class Workplan {
  private name: string;
  private description: string;
  private activities: Activity[];
  private year: number;
  private semester: number;

  // Constructor
  constructor(
    name: string,
    description: string,
    activities: Activity[],
    year: number,
    semester: number
  ) {
    this.name = name;
    this.description = description;
    this.activities = activities;
    this.year = year;
    this.semester = semester;
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
}
