import User from "./User";
import Student from "./Student";
import CampusENUM from "./campusENUM";
import StudentDTO from "../DTOs/student";
import NotificationInbox from "./NotificationInbox";

export default class StudentAdapter extends User {
  private student: Student;
  private inbox: NotificationInbox;

  constructor(student: StudentDTO) {
    super(
      student.name,
      student.email,
      student.password || student.carnet.toString(),
      student.campus,
      "student",
      undefined,
      undefined,
      student.carnet.toString(),
      student._id
    );
    this.student = new Student(student);

    // TODO: Implement the inbox in the database
    // For now, we will create an empty inbox
    this.inbox = new NotificationInbox();
  }

  public getCarnet(): number {
    return this.student.getCarnet();
  }

  public getPhoneNumber(): number {
    return this.student.getPhoneNumber();
  }

  public getCampus(): CampusENUM {
    return this.student.getCampus();
  }

  public receiveNotification(notificationID: number): void {
    this.inbox.addNotification(notificationID);
  }
}
