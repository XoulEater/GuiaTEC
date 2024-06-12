import Visitor from "./Visitor";
import Activity from "./Activity";

class ReminderVisitor implements Visitor {
    private systemDate: Date;
  
    constructor(systemDate: Date) {
      this.systemDate = systemDate;
    }
  
    visitActivity(activity: Activity): void {
      if (activity.getStatus() === "Notificada") {
        let nextReminderDate = new Date(activity.getDate());
        nextReminderDate.setDate(nextReminderDate.getDate() - activity.getPrevDays());
        
        while (nextReminderDate <= this.systemDate) {
          if (nextReminderDate.getDate() === this.systemDate.getDate()) {
            activity.notify();
            console.log(`Reminder: ${activity.getName()}`);
            break;
          }
          nextReminderDate.setDate(nextReminderDate.getDate() + activity.getReminderInterval());
        }
      }
    }
  }