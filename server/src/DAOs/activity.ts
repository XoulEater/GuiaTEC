import ActivityDTO from "DTOs/activity";
import Activity from "../model/Activity";
import ActivitySchema from "../schemas/activity.schema";
import Workplan from "../schemas/workplan.schema";

/**
 * Class that communicates with the database to perform CRUD operations
 */
export default class ActivityDAO {
  /**
   * Add a new activity to a workplan
   * @param workplanId Id of the workplan
   */
  public static async addActivityToWorkplan(
    workplanId: string,
    newActivity: Activity
  ) {
    await Workplan.findByIdAndUpdate(
      workplanId,
      { $push: { activities: newActivity } },
      { new: true, useFindAndModify: false }
    );
  }

  /**
   * Get all activities from a workplan
   * @param workplanId Id of the workplan
   */
  public static async getActivitiesFromWorkplan(workplanId: string) {
    const workplan = await Workplan.findById(workplanId);
    (workplan.activities as ActivityDTO[]).map((activity) => {
      new Activity(activity);
    });
  }

  /**
   * Get an activity from a workplan
   * @param workplanId Id of the workplan
   * @param activityId Id of the activity
   */
  public static async getActivityFromWorkplan(
    workplanId: string,
    activityId: string
  ) {
    const workplan = await Workplan.findById(workplanId).select({
      activities: { $elemMatch: { _id: activityId } },
    });
    return new Activity((workplan.activities as ActivityDTO[])[0]);
  }

  /**
   * Update an activity from a workplan
   * @param workplanId Id of the workplan
   * @param activityId Id of the activity
   */
  public static async updateActivityFromWorkplan(
    workplanId: string,
    activityId: string,
    updatedActivity: Activity
  ) {
    await Workplan.findOneAndUpdate(
      { _id: workplanId, "activities._id": activityId },
      {
        $set: {
          "activities.$": updatedActivity,
        },
      },
      { new: true, useFindAndModify: false }
    );
  }
}
