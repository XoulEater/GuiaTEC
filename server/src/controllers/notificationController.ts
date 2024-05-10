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
    console.log("Fecha de notificación", notificationDate);
    // I need to compare if notificationDate and today are the same day
    const today = new Date(process.env.TODAY);
    if (notificationDate.getDate() != today.getDate()) {
      const workPlans = await WorkplanDAO.getAllWorkplans();

      const allActivities: Activity[] = [];

      for (const workPlan of workPlans) {
        allActivities.push(...workPlan.getActivities());
      }

      console.log("Actividades", allActivities);

      const toNotify: Activity[] = [];
      const toPublish: Activity[] = [];

      for (const activity of allActivities) {
        if (activity.getStatus() == "Planeada") {
          toPublish.push(activity);
        }
        if (activity.getStatus() == "Publicada" || activity.getStatus() == "Notificada") {
          toNotify.push(activity);
        }
      }
      // Notify
      this.notify(toNotify);

      // Publish
      this.publish(toPublish);
    }
    res.status(200).json({ message: "Notification verified" });
  }

  public publish(
    activities: Activity[]
  ) {
    const today = new Date(process.env.TODAY);
    for (const activity of activities) {
      const startDate = activity.getDate();
      const prevDays = activity.getPrevDays();

      const publishDate = new Date();
      publishDate.setDate(startDate.getDate() - prevDays);

      if (today == publishDate) {
        // Send notification
        console.log("Actividad publicada", activity.getName());
      }
      console.log("Bandera 2");
    }

  }

  public notify(
    activities: Activity[]
  ) {

    const today = new Date(process.env.TODAY);
    for (const activity of activities) {
      const startDate = activity.getDate();
      const prevDays = activity.getPrevDays();
      const interval = activity.getReminderInterval();

      const publishDate = new Date();
      publishDate.setDate(startDate.getDate() - prevDays);

      let cont = interval;
      while (publishDate < startDate) {
        publishDate.setDate(publishDate.getDate() + interval);
        if (publishDate == today) {
          // Send notification
          console.log("Actividad notificada", activity.getName());
        }
        cont += interval;
      }
      console.log("Bandera 4");
    }
  }

  /**
 * Get all the notifications
 * @param req the request
 * @param res the response
 */
}