import Visitor from "./Visitor";
import Activity from "./Activity";

class PublishVisitor implements Visitor {
    private systemDate: Date;
  
    constructor(systemDate: Date) {
      this.systemDate = systemDate;
    }
  
    visitActivity(activity: Activity): void {
      const publishDate = activity.getPublishDate();
      if (activity.getStatus() === "Planeada" && publishDate <= this.systemDate) {
        activity.setStatus("Publicada");
        console.log(`Published: ${activity.getName()}`);
      }
    }
  }

