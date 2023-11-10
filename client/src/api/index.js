import axios from "axios";

const API = axios.create({ baseURL: process.env.REACT_APP_BACKEND_URL });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("Profile")) {
    req.headers.authorization = `Bearer ${
      JSON.parse(localStorage.getItem("Profile")).token
    }`;
  }
  return req;
});

export const logIn = (authData) => API.post("/auth/login", authData);
export const signUp = (authData) => API.post("/auth/signup", authData);

export const postQuestion = (questionData) =>
  API.post("/question", questionData);
export const getAllQuestions = () => API.get("/question");
export const deleteQuestion = (id) => API.delete(`/question/${id}`);
export const voteQuestion = (id, value, userId) =>
  API.patch(`/question/vote/${id}`, { value, userId });

export const postAnswer = (id, noOfAnswers, answerBody, userAnswered, userId) =>
  API.post(`/answer/${id}`, { noOfAnswers, answerBody, userAnswered, userId });
export const deleteAnswer = (id, answerId, noOfAnswers) =>
  API.put(`/answer/${id}`, { answerId, noOfAnswers });

export const getAllUsers = () => API.get("/user/getallusers");
export const updateProfile = (updateData) => API.put(`/user`, updateData);
