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


    // I need to compare if notificationDate and today are the same day
    const today = new Date(process.env.TODAY);
    if (notificationDate.getDate() != today.getDate()) {
      const workPlans = await WorkplanDAO.getAllWorkplans();

      const allActivities: Activity[] = [];

      for (const workPlan of workPlans) {
        allActivities.push(...workPlan.getActivities());
      }

      const toNotify: Activity[] = [];
      const toPublish: Activity[] = [];

      for (const activity of allActivities) {
        if (activity.getStatus() == "Planeada") {
          toPublish.push(activity);
        }
        if (
          activity.getStatus() == "Publicada" ||
          activity.getStatus() == "Notificada"
        ) {
          toNotify.push(activity);
        }
      }
      // Notify
      NotificationController.notify(toNotify);

      // Publish
      NotificationController.publish(toPublish);
    }
    res.status(200).json({ message: "Notification verified" });
  }

  static publish(activities: Activity[]) {
    const today = new Date(process.env.TODAY);
    for (const activity of activities) {
      const startDate = activity.getDate();
      const prevDays = activity.getPrevDays();

      const publishDate = new Date();
      publishDate.setDate(startDate.getDate() - prevDays);
      //console.log(publishDate.getDate(), today.getDate(), activity.getName());
      if (today.getDate() == publishDate.getDate()) {
        // Send notification
        console.log("Actividad publicada", activity.getName());
        activity.setStatus("Publicada");
      }
    }
  }

  static notify(activities: Activity[]) {
    const today = new Date(process.env.TODAY);
    for (const activity of activities) {
      const startDate = activity.getDate();
      const prevDays = activity.getPrevDays();
      const interval = activity.getReminderInterval();

      const publishDate = new Date();
      publishDate.setDate(startDate.getDate() - prevDays);

      let cont = interval;
      while (publishDate <= startDate && publishDate <= today) {
        publishDate.setDate(publishDate.getDate() + interval);
        console.log(publishDate.getDate(), today.getDate(), activity.getName());
        if (publishDate.getDate() == today.getDate()) {
          console.log("Actividad notificada", activity.getName());
          activity.setStatus("Notificada");
        }
        cont += interval;
      }
    }
  }



}
