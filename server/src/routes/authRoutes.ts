import express from "express";
import { AuthController } from "../controllers/authContoller";



const router = express.Router();

// Auth routes
router.get("/test", AuthController.test);

export default router;
