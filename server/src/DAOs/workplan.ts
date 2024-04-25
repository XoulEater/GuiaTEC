// Workplan DAO that communicates with the database
import WorkplanSchema from "../schemas/workplan.schema";
import Workplan from "../model/Workplan";
import Activity from "../model/Activity";

export default class WorkplanDAO {
  /**
   * Create a new workplan in the database
   * @param pWorkplanDTO the workplan to be created
   * @returns the created workplan
   */
  public static async createWorkplan(
    pWorkplanDTO: Workplan
  ): Promise<Workplan> {
    const workplan = new WorkplanSchema(pWorkplanDTO);
    await workplan.save();
    return pWorkplanDTO;
  }

  /**
   * Create multiple workplans in the database
   * @param workplans the workplans to be created
   */
  public static async createWorkplans(workplans: Workplan[]) {
    await WorkplanSchema.insertMany(workplans);
  }

  /**
   * Get all the workplans from the database
   * @returns a list with all the workplans
   */
  public static async getAllWorkplans(): Promise<Workplan[]> {
    const workplan = await WorkplanSchema.find().exec();
    return workplan.map((workplan) => workplan.toObject());
  }

  /**
   * Get a workplan by its id
   * @param _id id of the workplan
   * @returns the workplan with the given code
   */
  public static async getWorkplanById(_id: string): Promise<Workplan> {
    const workplan = await WorkplanSchema.findOne({ _id: _id }).exec();
    return workplan ? workplan.toObject() : null;
  }

  /**
   * Update a workplan in the database
   * @param _id id of the workplan
   * @param pWorkplanDTO the workplan with the new information
   * @returns the updated workplan
   */
  public static async updateWorkplan(
    _id: string,
    pWorkplanDTO: Workplan
  ): Promise<Workplan> {
    const workplan = await WorkplanSchema.findOneAndUpdate(
      { _id: _id },
      pWorkplanDTO,
      { new: true }
    );
    return workplan ? workplan.toObject() : null;
  }

  /**
   * Delete a workplan from the database
   * @param _id id of the workplan
   * @returns the deleted workplan
   */
  public static async deleteWorkplan(_id: string): Promise<Workplan> {
    const workplan = await WorkplanSchema.findOneAndDelete({
      _id: _id,
    });
    return workplan ? workplan.toObject() : null;
  }

  /**
   * Get all the activities from the database
   * @returns a list with all the activities
   */
  public static async getAllActivities() {
    const workplan = await WorkplanSchema.find().exec();
    return workplan.map((workplan) => new Activity(workplan.toObject()));
  }

  /**
   * Add an activity to the workplan
   * @returns a list with all the activities
   */
  public static async addActivityToWorkplan(
    workplanId: string,
    activity: Activity
  ): Promise<Workplan | null> {
    const workplan = await WorkplanSchema.findOneAndUpdate(
      { _id: workplanId },
      { $push: { activities: activity } },
      { new: true }
    );
    return workplan ? workplan.toObject() : null;
  }

}
