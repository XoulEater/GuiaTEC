import { Request, Response } from "express";
import ActivityDAO from "../DAOs/activity";
import Activity from "../model/Activity";
import ActivityDTO from "../DTOs/activity";
import WorkplanDTO from "../DAOs/workplan";

/**
 * Class that handles the requests related to activities
 */
export class ActivityController {
  /**
   * Get all the activities
   * @param req the request
   * @param res the response
   */
  public static async getAllActivities(
    req: Request,
    res: Response
  ): Promise<void> {
    const activities = await WorkplanDTO.getAllActivities();
    res.json(activities);
  }

  /**
   * Create a new activity
   * @param req the request
   * @param res the response
   */
  public static async createActivity(
    req: Request,
    res: Response
  ): Promise<void> {
    const activityData: ActivityDTO = req.body;
    const activity = new Activity(activityData);
    await ActivityDAO.createActivity(activity);
    res.json(activity);
  }

  /**
   * Cancel an activity
   * @param req the request
   * @param res the response
   */

  public static async cancelActivity(
    req: Request,
    res: Response
  ): Promise<void> {
    const activityId = req.params.id;
    await ActivityDAO.cancelActivity(activityId);
    res.json({ message: "Activity cancelled" });
  }
}