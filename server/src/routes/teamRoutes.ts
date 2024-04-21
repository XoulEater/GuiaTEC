import express from "express";
import { TeamController } from "../controllers/teamController";

const router = express.Router();

router.get("/", TeamController.getAllTeams);
router.post("/createTeam", TeamController.createTeam); // FIXME: is not necessary to have the /createTeam, just / is enough
// TODO: Add the rest of the routes

export default router;
