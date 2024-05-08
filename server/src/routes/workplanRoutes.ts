import express from "express";
import { WorkplanController } from "../controllers/workplanController";
import { ActivityController } from "../controllers/activityController";

const router = express.Router();

// Workplan routes
router.get("/", WorkplanController.getAllWorkplans);
router.get("/:id", WorkplanController.getWorkplanById);
router.post("/", WorkplanController.createWorkplan);
router.put("/:id", WorkplanController.updateWorkplan);
router.delete("/:id", WorkplanController.deleteWorkplan);

// Activity routes
router.get("/:wid/activities", ActivityController.getAllActivities);
router.get("/:wid/activities/:aid", ActivityController.getActivityById);
router.post("/:wid/activities", ActivityController.createActivity);
router.put("/:wid/activities/:aid", ActivityController.updateActivity);

export default router;
