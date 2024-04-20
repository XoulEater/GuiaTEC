import express from "express";
import { TeamController } from "../controllers/teamController";

const router = express.Router();

router.get("/", TeamController.getAllTeams);
router.post("/createTeam", TeamController.createTeam);

export default router;