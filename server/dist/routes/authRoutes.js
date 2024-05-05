"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authContoller_1 = require("../controllers/authContoller");
const router = express_1.default.Router();
// Auth routes
router.get("/test", authContoller_1.AuthController.test);
// reset password
// router.post("/resetPassword", AuthController.resetPassword); // req: email,
// router.get("/validateToken", AuthController.validateToken); // req: userID
// router.post("/changePassword", AuthController.changePassword); // req: email, new password
exports.default = router;
//# sourceMappingURL=authRoutes.js.map