import mongoose from "mongoose";
import User from "../models/user.js";

export const getAllUsers = async (req, res) => {
  try {
    const allUsers = await User.find();
    const allUserDetails = [];
    allUsers.forEach((users) => {
      allUserDetails.push({
        _id: users._id,
        name: users.name,
        about: users.about,
        tags: users.tags,
        joinedOn: users.joinedOn,
      });
    });
    res.status(200).json(allUserDetails);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const updateProfile = async (req, res) => {
  const _id = req.userId;
  const { name, about, tags } = req.body;
  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send("Profile unavailable...");
  }
  try {
    const updatedProfile = await User.findByIdAndUpdate(
      _id,
      { $set: { name, about, tags } },
      { new: true }
    );
    // new:true will allow the response also to be updated instead of just updating the database
    res.status(200).json(updatedProfile);
  } catch (error) {
    res.status(405).json({ message: error.message });
  }
};

export const getUserDetails = async (req, res) => {
  try {
    const userId = req.userId;
    const user = await User.findById(userId, { password: 0 });
    if (!user) {
      res.status(404).json("Profile unavailable...");
    }
    res.status(200).json({ user });
  } catch (error) {
    res.status(405).json({ message: error.message });
  }
};
