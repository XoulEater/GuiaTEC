import InboxDTO from "../DTOs/inbox";

export default class NotificationInbox {
  private notifications: Set<number> = new Set(); // Notification IDs
  private readNotifications: Set<number> = new Set(); // Notification IDs

  public constructor(inbox: InboxDTO) {
    this.notifications = new Set(inbox.notifications);
    this.readNotifications = new Set(inbox.readNotifications);
  }

  public addNotification(notificationID: number): void {
    this.notifications.add(notificationID);
  }

  public markAsRead(notificationID: number): void {
    this.readNotifications.add(notificationID);
  }

  public deleteNotification(notificationID: number): void {
    this.notifications.delete(notificationID);
    this.readNotifications.delete(notificationID);
  }

  public getNotifications(): number[] {
    return Array.from(this.notifications);
  }

  public getUnreadNotifications(): number[] {
    return Array.from(this.notifications).filter(
      (id) => !this.readNotifications.has(id)
    );
  }
}
