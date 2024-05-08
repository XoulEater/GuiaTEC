"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const activityController_1 = require("../controllers/activityController");
const router = express_1.default.Router();
router.get("/:wid/", activityController_1.ActivityController.getAllActivities);
// router.post("/", ActivityController.createActivity);
// router.put("/members/:code/:bool", ActivityController.cancelActivity);
exports.default = router;
// - get all by plan 	/workplan/:wid/activities
// - get by id 		/workplan/:wid/activity/:aid
// - create in plan 	/workplan/:wid/activity/
// - update 		/workplan/:wid/activity/:aid
//# sourceMappingURL=activityRoute.js.map