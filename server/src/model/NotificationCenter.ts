import Student from "./Student";
import Notification from "./Notification";
import StudentDAO from "../DAOs/student";
import { Observer } from "./Observer";
import StudentAdapter from "./StudentAdapter";

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
    // TODO: Fetch notifications from database when available
    // AlertDAO.getAllAlerts().then((notifications) => {
    //   this.notifications = notifications;
    // });
  }

  public update(notification: Notification): void {
    this.notifications.push(notification);
    const notificationID = this.notifications.length;

    // TODO: Add workflow to save notification to database [DAO, DTO, etc]
    // AlertDAO.saveAlert(notification);

    // Notify students
    this.students.forEach((student) => {
      student.receiveNotification(notificationID);
      StudentDAO.updateStudentInbox(
        student.getCarnet().toString(),
        student.getInbox()
      );
    });

    console.log(this.notifications);
    console.log(this.students);
  }
}
