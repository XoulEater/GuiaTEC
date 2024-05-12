"use strict";
// Notification Controller that handles the requests related to notifications
// uses the NotificationDAO to perform the operations
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationController = void 0;
const notification_1 = __importDefault(require("../DAOs/notification"));
const workplan_1 = __importDefault(require("../DAOs/workplan"));
require("dotenv").config();
class NotificationController {
    static verifyNotification(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const notificationDate = yield notification_1.default.getLastNotification();
            // get the current date, using the date set in the .env file for testing
            const today = new Date(process.env.TODAY);
            // if the notification date is not today
            console.log(notificationDate.getDate(), today.getDate());
            if (notificationDate.getDate() != today.getDate()) {
                const workPlans = yield workplan_1.default.getAllWorkplans();
                // for each workplan, verify the activities
                for (let workPlan of workPlans) {
                    workPlan.getActivities().forEach((activity) => {
                        activity.verify(today);
                    });
                    // update the workplan in the database
                    yield workplan_1.default.updateWorkplan(workPlan.getID(), workPlan);
                }
                // record the notification in the database to avoid multiple notifications👌
                yield notification_1.default.addNotification(today);
            }
            res.status(200).json({ message: "Notification verified" });
        });
    }
}
exports.NotificationController = NotificationController;
//# sourceMappingURL=notificationController.js.map