import TeamSchema from "../schemas/team.schema";
import Team from "../model/Team";

export default class TeamDAO {
  /**
   *
   * @returns
   */
  public static async getAllTeams(): Promise<Team[]> { // get all the teams 
    const teams = await TeamSchema.find().exec(); // get all the teams from the database
    return teams.map((team) => new Team(team.toObject())); // return the teams
  }

  public static async createTeam(team: Team) { // create a team
    const newTeam = await TeamSchema.create(team);
  }
}
