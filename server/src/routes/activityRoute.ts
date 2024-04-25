import express from "express";
import { ActivityController } from "../controllers/activityController";


const router = express.Router();

router.get("/activities", ActivityController.getAllActivities);
router.post("/", ActivityController.createActivity);
router.put("/members/:code/:bool", ActivityController.cancelActivity);


export default router;
