import InboxDTO from "../DTOs/inbox";

export default class NotificationInbox {
  private notifications: number[] = []; // Notification IDs
  private readNotifications: number[] = []; // Notification IDs

  public constructor(inbox: InboxDTO) {
    this.notifications = inbox.notifications;
    this.readNotifications = inbox.readNotifications;
  }

  public addNotification(notificationID: number): void {
    this.notifications.push(notificationID);
  }

  public markAsRead(notificationID: number): void {
    this.readNotifications.push(notificationID);
  }

  public deleteNotification(notificationID: number): void {
    this.notifications = this.notifications.filter(
      (id) => id !== notificationID
    );
    this.readNotifications = this.readNotifications.filter(
      (id) => id !== notificationID
    );
  }

  public deleteReadNotifications(): void {
    // Remove read notifications from both lists
    this.notifications = this.notifications.filter(
      (id) => !this.readNotifications.includes(id)
    );
    this.readNotifications = [];
  }

  public getNotifications(): number[] {
    return this.notifications;
  }

  public getUnreadNotifications(): number[] {
    return this.notifications.filter(
      (id) => !this.readNotifications.includes(id)
    );
  }
}
