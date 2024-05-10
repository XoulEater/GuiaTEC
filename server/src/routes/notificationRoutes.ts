import express from "express";
import { NotificationController } from "../controllers/notificationController";
const router = express.Router();

router.get("/", NotificationController.verifyNotification);

export default router;

