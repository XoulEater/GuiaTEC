import { Request, Response } from "express";
import ActivityDAO from "../DAOs/activity";
import Activity from "../model/Activity";
import ActivityDTO from "../DTOs/activity";
import WorkplanDAO from "../DAOs/workplan";

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
    const workplanId = req.params.wid;
    const workplan = await WorkplanDAO.getWorkplanById(workplanId);
    console.log(workplan.getActivities());

    res.json(workplan.getActivities());
  }

  /**
   * Get an activity by its id
   * @param req the request
   * @param res the response
   */
  public static async getActivityById(
    req: Request,
    res: Response
  ): Promise<void> {
    const workplanId = req.params.wid;
    const activityId = req.params.aid;
    const workplan = await WorkplanDAO.getWorkplanById(workplanId);

    const activity = workplan
      .getActivities()
      .find((activity) => activity.getID() === activityId);

    res.json(activity);
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
    const activityDTO: ActivityDTO = req.body;
    const workplanId = req.params.wid;
    const activity = new Activity(activityDTO);
    const workplan = await WorkplanDAO.getWorkplanById(workplanId);
    workplan.addActivity(activity);
    await WorkplanDAO.updateWorkplan(workplanId, workplan);
    res.json("Activity created");
  }
}
