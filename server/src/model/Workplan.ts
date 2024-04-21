//import Activity from "./Activity.ts"
export default class Workplan  {
    private name: string;
    private description: string;
    private activities: Activity[];
  
    // Constructor
    constructor(
      name: string,
      description: string,
      activity: Activity[],

    ) {
      
      this.name = name;
      this.description = description;
      this.activities = this.activities;
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
  }
  