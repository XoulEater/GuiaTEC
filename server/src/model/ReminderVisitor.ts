import Visitor from "./Visitor";
import Activity from "./Activity";
import Subject from "./Subject";
import Notification from "./Notification";

class ReminderVisitor extends Subject implements Visitor {
  private systemDate: Date;

  constructor(systemDate: Date) {
    super();
    this.systemDate = systemDate;
  }

  visitActivity(activity: Activity): void {
    if (activity.getStatus() === "Notificada") {
      let nextReminderDate = new Date(activity.getDate());
      nextReminderDate.setDate(
        nextReminderDate.getDate() - activity.getPrevDays()
      );

      while (nextReminderDate <= this.systemDate) {
        if (nextReminderDate.getDate() === this.systemDate.getDate()) {
          const notification = new Notification(
            "Recordatorio",
            `La actividad ${activity.getName()} se llevará a cabo el ${activity.getDate()}`
          );
          super.notifyObservers(notification);
          console.log(`Reminder: ${activity.getName()}`);
          break;
        }
        nextReminderDate.setDate(
          nextReminderDate.getDate() + activity.getReminderInterval()
        );
      }
    }
  }
}
