import express from "express";

import {
  getAllUsers,
  updateProfile,
  getUserDetails,
} from "../controllers/user.js";
import auth from "../middlewares/auth.js";

const router = express.Router();

router.get("/getallusers", getAllUsers);
router.get("/:id", auth, getUserDetails);
router.put("/", auth, updateProfile);

export default router;
