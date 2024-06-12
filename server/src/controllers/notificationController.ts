// Notification Controller that handles the requests related to notifications
// uses the NotificationDAO to perform the operations
import { Request, Response } from "express";
import NotificationDAO from "../DAOs/notification";
import WorkplanDAO from "../DAOs/workplan";

require("dotenv").config();

export class NotificationController {
  public static async verifyNotification(
    req: Request,
    res: Response
  ): Promise<void> {
    try {
      const notificationDate: Date =
        await NotificationDAO.getLastNotification();

      // get the current date, using the date set in the .env file for testing
      const today = new Date(process.env.TODAY);

      // if the notification date is not today
      console.log(notificationDate.getDate(), today.getDate());
      if (notificationDate.getDate() != today.getDate()) {
        const workPlans = await WorkplanDAO.getAllWorkplans();

        // for each workplan, verify the activities
        for (let workPlan of workPlans) {
          workPlan.getActivities().forEach((activity) => {
            // activity.verify(today);
            // TODO: implement the verify method in the activity class using Visitor pattern
          });
          // update the workplan in the database
          await WorkplanDAO.updateWorkplan(workPlan.getID(), workPlan);
        }

        // record the notification in the database to avoid multiple notifications👌
        await NotificationDAO.addNotification(today);
      }
      res.status(200).json({ message: "Notification already verified" });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: "An error occurred while verifying the notification.",
      });
    }
  }
}
