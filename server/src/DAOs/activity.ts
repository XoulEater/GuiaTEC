import Activity from '../model/Activity';
import ActivitySchema from '../schemas/activity.schema';


/**
 * Class that communicates with the database to perform CRUD operations
 */
export default class ActivityDAO {
  static cancelActivity(activityId: string) {
    throw new Error("Method not implemented.");
  }
  /**
   * Get all the activities from the database
   * @returns a list with all the activities
   */
  public static async getAllActivities(): Promise<Activity[]> {
    const activities = await ActivitySchema.find().exec();
    return activities.map((activity) => new Activity(activity.toObject()));
  }

  public static async createActivity(activity: Activity) {
    const newActivity = new ActivitySchema(activity);
    await newActivity.save();
  }

  public cancelActivity(activityId: string) {
    ActivitySchema.findOneAndUpdate(
      { id: activityId },
      { status: 'cancelled' },
      { new: true }
    ).exec();
  }

}