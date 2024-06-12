import Student from "./Student";
import Notification from "./Notification";
import StudentDAO from "../DAOs/student";
import { Observer } from "./Observer";

export default class NotificationCenter implements Observer {
  private static instance: NotificationCenter;
  private notifications: Notification[] = [];
  private students: Student[] = [];

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
    StudentDAO.getAllStudents().then((students) => {
      this.students = students;
    });

    // TODO: Fetch notifications from database when available
    // NotificationDAO.getAllNotifications().then((notifications) => {
    //   this.notifications = notifications;
    // });
  }

  public update(notification: Notification): void {
    this.notifications.push(notification);
    const notificationID = this.notifications.length;

    // TODO: Add workflow to save notification to database [DAO, DTO, etc]
    // NotificationDAO.saveNotification(notification);

    // Notify students
    this.students.forEach((student) => {
      // student.receiveNotification(notification);
      console.log(`Notification sent to ${student.getName()}`);
    });
  }
}
