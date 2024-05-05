import { Request, Response } from "express";
import TeacherDAO from "../DAOs/teacher";
import logTeam from "../schemas/logTeam.schema";

export class TeamController {
  public static async getAllMembers(
    req: Request,
    res: Response
  ): Promise<void> {
    try {
      const members = await TeacherDAO.getAllMembers();
      res.status(200).json(members);
    } catch (error) {
      res.status(500).json({ error: "Error getting members" });
    }
  }

  public static async addMember(req: Request, res: Response): Promise<void> {
    try {
      const code = req.params.code;
      await TeacherDAO.addMember(code);
      res.status(200).json({ message: "Member added" });
      await logTeam.create({ agenteCambio: "Teacher", sujetoReceptor: code, accion: "addMember", date: new Date() });
    } catch (error) {
      res.status(500).json({ error: "Error adding member" });
    }
  }

  public static async removeMember(req: Request, res: Response): Promise<void> {
    try {
      const code = req.params.code;
      await TeacherDAO.removeMember(code);
      res.status(200).json({ message: "Member removed" });
    } catch (error) {
      res.status(500).json({ error: "Error removing member" });
    }
  }

  public static async setCoordinator(
    req: Request,
    res: Response
  ): Promise<void> {
    try {
      const code = req.params.code;
      const isLeader = req.params.bool === "true" ? true : false;
      console.log(code, isLeader);
      await TeacherDAO.setCoordinator(code, isLeader);
      res.status(200).json({ message: "Coordinator updated" });
    } catch (error) {
      res.status(500).json({ error: "Error updating coordinator" });
    }
  }
}
