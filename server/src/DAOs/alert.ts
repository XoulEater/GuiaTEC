import alertSchema from "../schemas/alert.schema";
import Notification from "../model/Notification";

export default class AlertDAO {
  /**
   * get all notifications in data base
   */
  public static async getAllAlerts(): Promise<Notification[]> {
    const alerts = await alertSchema.find().exec();
    return alerts.map((alert) => new Notification(alert.toObject()));
  }
  /**
   * Save a new notification in the database
   * @param notification the notification to be created
   */
  public static async saveAlert(alert: Notification): Promise<void> {
    await alertSchema.create(alert);
  }
}
