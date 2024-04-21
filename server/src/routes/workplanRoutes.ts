import express from "express";
import { WorkplanController } from "../controllers/workplanController";

const router = express.Router();

// Workplan routes
router.get("/", WorkplanController.getAllWorkplans);
router.get("/:code", WorkplanController.getWorkplanById);
router.post("/", WorkplanController.createWorkplan);
router.put("/:code", WorkplanController.updateWorkplan);
router.delete("/:code", WorkplanController.deleteWorkplan);

export default router;
