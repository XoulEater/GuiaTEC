import TeamSchema from '../schemas/team.schema';
import Team from '../model/Team';

export default class TeamDAO {

  public static async getAllTeams(): Promise<Team[]> {
    const teams = await TeamSchema.find().exec();
    return teams.map((team) => new Team(team.toObject()));
  }

  public static async createTeam(team: Team) {
    const newTeam = await TeamSchema.create(team);
  }
}

