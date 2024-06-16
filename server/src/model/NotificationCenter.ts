import Student from "./Student";
import Notification from "./Notification";
import StudentDAO from "../DAOs/student";
import { Observer } from "./Observer";
import StudentAdapter from "./StudentAdapter";
import AlertDAO from "../DAOs/alert";

export default class NotificationCenter implements Observer {
  private static instance: NotificationCenter;
  private notifications: Notification[] = [];
  private students: StudentAdapter[] = [];

  private constructor() {
    this.fetch();
  }

  public static getInstance(): NotificationCenter {
    if (!NotificationCenter.instance) {
      NotificationCenter.instance = new NotificationCenter();
    }
    return NotificationCenter.instance;
  }

  public fetch() {
    // Fetch data from database

    // Fetch students from database
    StudentDAO.getAllStudentsAdapted().then((students) => {
      this.students = students;
    });
    AlertDAO.getAllAlerts().then((notifications) => {
      this.notifications = notifications;
    });
  }

  public update(notification: Notification): void {
    this.notifications.push(notification);
    const notificationID = this.notifications.length - 1;

    AlertDAO.saveAlert(notification);

    // FIXME: Something is wrong here
    // Notify students
    console.log("sendingAlert:" + notificationID);

    this.students.forEach((student) => {
      student.receiveNotification(notificationID);
      StudentDAO.updateStudentInbox(
        student.getCarnet().toString(),
        student.getInbox()
      );
    });
  }
}
