import express from "express";

import {
  AskQuestion,
  getQuestions,
  deleteQuestion,
  voteQuestion,
} from "../controllers/question.js";
import auth from "../middlewares/auth.js";

const router = express.Router();

router.post("/", auth, AskQuestion);
router.get("/:id?", getQuestions);
router.delete("/:id", deleteQuestion);
router.patch("/vote/:id", voteQuestion);

export default router;
