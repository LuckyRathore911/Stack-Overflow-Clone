import mongoose from "mongoose";

import Question from "../models/question.js";

export const AskQuestion = async (req, res) => {
  //console.log(req.body)
  const postQuestionData = req.body;
  const postQuestion = new Question({ ...postQuestionData });
  try {
    await postQuestion.save();
    res.status(200).json("Posted a question successfully");
  } catch (error) {
    console.log(error);
    res.status(409).json("Couldn't post a new question");
  }
};

export const getQuestions = async (req, res) => {
  try {
    let questionList;
    const questionId = req.params.id;
    if (questionId) {
      questionList = await Question.findById(questionId);
    } else {
      questionList = await Question.find();
    }
    res.status(200).json(questionList);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const deleteQuestion = async (req, res) => {
  const { id = _id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send("Question Unavailable...");
  }
  try {
    await Question.findByIdAndRemove(id);
    res.status(200).json({ message: "Successfully deleted..." });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const voteQuestion = async (req, res) => {
  const { id: _id } = req.params;
  //console.log(_id)
  const { value, userId } = req.body;
  //const userId = req.userId;

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send("Question Unavailable...");
  }

  try {
    const question = await Question.findById(_id);
    const upIndex = question.upVote.findIndex((id) => id === String(userId));
    const downIndex = question.downVote.findIndex(
      (id) => id === String(userId)
    );

    if (value === "upVote") {
      if (downIndex !== -1) {
        question.downVote = question.downVote.filter(
          (id) => id !== String(userId)
        );
      }
      if (upIndex === -1) {
        question.upVote.push(userId);
      } else {
        question.upVote = question.upVote.filter((id) => id !== String(userId));
      }
    } else if (value === "downVote") {
      if (upIndex !== -1) {
        question.upVote = question.upVote.filter((id) => id !== String(userId));
      }
      if (downIndex === -1) {
        question.downVote.push(userId);
      } else {
        question.downVote = question.downVote.filter(
          (id) => id !== String(userId)
        );
      }
    }

    await Question.findByIdAndUpdate(_id, question);
    res.status(200).json({ message: "Voted Successfully..." });
  } catch (error) {
    //console.log(error)
    res.status(404).json({ message: "id not found" });
  }
};
