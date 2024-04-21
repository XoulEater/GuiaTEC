import { Request, Response } from "express";
import TeamDAO from "../DAOs/team";
import Team from "../model/Team";
import TeamDTO from "../DTOs/team";

export class TeamController {

  public static async getAllTeams(
    req: Request, 
    res: Response): 
    Promise<void> {
    const teams = await TeamDAO.getAllTeams();
    res.json(teams);
  }

  public static async createTeam(
    req: Request, 
    res: Response): 
    Promise<void> {
    const teamData: TeamDTO = req.body;
    const newTeam = new Team(teamData);
    const id = Math.floor(Math.random() * 1000).toString();
    newTeam.setId(id);

    await TeamDAO.createTeam(newTeam);
    res.json(newTeam);
  }
}

