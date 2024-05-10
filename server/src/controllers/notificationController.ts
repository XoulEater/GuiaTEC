// Notification Controller that handles the requests related to notifications
// uses the NotificationDAO to perform the operations

import { Request, Response } from "express";
import NotificationDAO from "../DAOs/notification";
import WorkplanDAO from "../DAOs/workplan";
import Activity from "../model/Activity";

require("dotenv").config();

export class NotificationController {
  public static async verifyNotification(
    req: Request,
    res: Response
  ): Promise<void> {
    const notificationDate: Date = await NotificationDAO.getLastNotification();

    // get the current date, using the date set in the .env file for testing
    const today = new Date(process.env.TODAY);

    // if the notification date is not today
    if (notificationDate.getDate() != today.getDate()) {
      const workPlans = await WorkplanDAO.getAllWorkplans();

      // for each workplan, verify the activities
      for (let workPlan of workPlans) {
        for (let activity of workPlan.getActivities()) {
          if (
            activity.getStatus() != "Notificada" ||
            activity.getStatus() != "Publicada"
          ) {
            activity.verifyNotify(today);
          } else if (activity.getStatus() == "Planeada") {
            activity.verifyPublish(today);
          }
        }

        // update the workplan in the database
        await WorkplanDAO.updateWorkplan(workPlan.getID(), workPlan);
      }

      // record the notification in the database to avoid multiple notifications👌
      await NotificationDAO.addNotification(today);
    }
    res.status(200).json({ message: "Notification verified" });
  }
}
