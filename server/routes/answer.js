import express from "express";

import { postAnswer, deleteAnswer } from "../controllers/answer.js";
import auth from "../middlewares/auth.js";

const router = express.Router();

router.post("/:questionId", auth, postAnswer);
router.put("/:questionId", auth, deleteAnswer);
export default router;
