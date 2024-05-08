import express from "express";
import { ForumController } from "../controllers/forumController";

const router = express.Router();

router.post("/:wid/activity/:aid/forum", ForumController.addMessage);
router.post("/:wid/activity/:aid/forum/:mid", ForumController.addReply);

export default router;
