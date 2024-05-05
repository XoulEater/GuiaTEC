"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const workplanController_1 = require("../controllers/workplanController");
const activityController_1 = require("../controllers/activityController");
const router = express_1.default.Router();
// Workplan routes
router.get("/", workplanController_1.WorkplanController.getAllWorkplans);
router.get("/:id", workplanController_1.WorkplanController.getWorkplanById);
router.post("/", workplanController_1.WorkplanController.createWorkplan);
router.put("/:id", workplanController_1.WorkplanController.updateWorkplan);
router.delete("/:id", workplanController_1.WorkplanController.deleteWorkplan);
// Activity routes
router.get("/:wid/activities", activityController_1.ActivityController.getAllActivities);
router.get("/:wid/activities/:aid", activityController_1.ActivityController.getActivityById);
router.post("/:wid/activities", activityController_1.ActivityController.createActivity);
router.put("/:wid/activity/:aid", activityController_1.ActivityController.updateActivity);
exports.default = router;
//# sourceMappingURL=workplanRoutes.js.map