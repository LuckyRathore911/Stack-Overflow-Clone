import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";


import "./Auth.css";
import icon from "../../assets/icon.png";
import { signup, login } from "../../actions/auth";

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSwitch = () => {
    setIsSignUp(!isSignUp);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email && !password) {
      alert("Enter all details");
    }

    if (isSignUp) {
      if (!name) {
        alert("Enter a name to continue");
      }

      
      dispatch(signup({ name, email, password }, navigate));
      
    } else {
      dispatch(login({ email, password }, navigate));
    }
  };

  return (
    <section className="authSection">
      {isSignUp && (
        <div className="authContainer1">
          <h1>Join the Stack Overflow community</h1>
          <p>
            Get unstuck — ask a question
            <br />
            Unlock new privileges like voting and commenting
            <br />
            Save your favorite tags, filters, and jobs
            <br />
            Earn reputation and badges
            <br />
          </p>
          <p style={{ color: "#666767", fontSize: "13px" }}>
            Collaborate and share knowledge with a private group for FREE.
          </p>
          <p style={{ color: "#007ac6", fontSize: "13px" }}>
            Get Stack Overflow for Teams free for up to 50 users.
          </p>
        </div>
      )}

      <div className="authContainer2">
        {!isSignUp && (
          <img src={icon} alternate="stackOverflow" className="loginLogo" />
        )}
        <form onSubmit={handleSubmit}>
          {isSignUp && (
            <label htmlFor="name">
              <h4>Display Name</h4>
              <input
                type="text"
                name="name"
                id="name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              ></input>
            </label>
          )}

          <label htmlFor="email">
            <h4>Email</h4>
            <input
              type="email"
              name="email"
              id="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            ></input>
          </label>

          <label htmlFor="password">
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h4>Password</h4>
              {!isSignUp && (
                <p style={{ color: "#007ac6", fontSize: "13px" }}>
                  Forgot Password?
                </p>
              )}
            </div>
            <input
              type="password"
              name="password"
              id="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            ></input>
            {isSignUp && (
              <p style={{ color: "#666767", fontSize: "13px" }}>
                Passwords must contain at least eight characters,
                <br /> including at least 1 letter and 1 number.
              </p>
            )}
          </label>

          {isSignUp && (
            <label htmlFor="check">
              <input type="checkbox" id="check"></input>
              <p style={{ fontSize: "13px" }}>
                Opt-in to receive occasional product
                <br /> updates, user research invitations, company
                <br /> announcements, and digests.
              </p>
            </label>
          )}

          <button type="submit" id="authButton">
            {isSignUp ? "Sign up" : "Log in"}
          </button>

          {isSignUp && (
            <p style={{ color: "#666767", fontSize: "13px" }}>
              {" "}
              By clicking “Sign up”, you agree to our
              <span style={{ color: "#007ac6" }}>
                {" "}
                terms of
                <br /> service
              </span>
              ,<span style={{ color: "#007ac6" }}> privacy policy</span> and
              <span style={{ color: "#007ac6" }}> cookie policy</span>{" "}
            </p>
          )}
        </form>
        <p>
          {isSignUp ? "Already have an account?" : "Don't have an account?"}
          <button
            type="button"
            className="handle-switch-button"
            onClick={handleSwitch}
          >
            {isSignUp ? "Log in" : "Sign up"}
          </button>
        </p>
      </div>
    </section>
  );
};

export default Auth;
