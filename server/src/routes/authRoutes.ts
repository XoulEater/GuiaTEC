import express from "express";
import { AuthController } from "../controllers/authContoller";

const router = express.Router();

// Auth routes
router.get("/test", AuthController.test);

// reset password
// router.post("/resetPassword", AuthController.resetPassword); // req: email,
// router.get("/validateToken", AuthController.validateToken); // req: userID
// router.post("/changePassword", AuthController.changePassword); // req: email, new password

export default router;
