import express from "express";
import { TeamController } from "../controllers/teamController";

const router = express.Router();

router.get("/", TeamController.getAllTeams);
router.post("/", TeamController.createTeam); 

// TODO: Add the rest of the routes

export default router;
