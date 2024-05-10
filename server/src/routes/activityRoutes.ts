import express from "express";
import { ActivityController } from "../controllers/activityController";
import { NotificationController } from "../controllers/notificationController";



const router = express.Router({ mergeParams: true });

router.get("/", ActivityController.getAllActivities);
router.get("/:aid", ActivityController.getActivityById);
router.post("/", ActivityController.createActivity);
router.put("/:aid", ActivityController.updateActivity);

router.get("/notifications", NotificationController.verifyNotification);

export default router;
