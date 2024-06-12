import Visitor from "./Visitor";
import Activity from "./Activity";
import Subject from "./Subject";
import Notification from "./Notification";

class PublishVisitor extends Subject implements Visitor {
  private systemDate: Date;

  constructor(systemDate: Date) {
    super();
    this.systemDate = systemDate;
  }

  visitActivity(activity: Activity): void {
    const publishDate = activity.getPublishDate();
    if (activity.getStatus() === "Planeada" && publishDate <= this.systemDate) {
      activity.setStatus("Publicada");
      console.log(`Published: ${activity.getName()}`);
      const notification = new Notification(
        "Publicación",
        `La actividad ${activity.getName()} ha sido publicada`
      );
      super.notifyObservers(notification);
    }
  }
}
