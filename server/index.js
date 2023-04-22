//index -> routes -> controllers

// For type="commonjs" in package.json we import like:  const express= require('express')
//Now we have type="module" so we will import like:
import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/user.js";
import questionRoutes from "./routes/question.js";
import answerRoutes from "./routes/answer.js";

const port = process.env.PORT;
const connectionString = process.env.CONNECTION_STRING;
const app = express();

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("This is a stack overflow clone API");
});

app.use("/auth", authRoutes);
app.use("/user", userRoutes);
app.use("/question", questionRoutes);
app.use("/answer", answerRoutes);

mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(port, () => {
      console.log(`Server running at port: ${port}`);
    })
  )
  .catch((err) => console.log(err.message));
