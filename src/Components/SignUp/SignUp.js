import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../Firebase";

import "./SignUp.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        if (auth) {
          //If register successful it will redirect to homepage
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="signup">
      <div className="signup__banner">
        <div>
          <Link to="/">
            <img
              className="nav__logoSignup"
              src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Logo_Netflix.png"
              alt="Netflix Logo"
            />
          </Link>
        </div>
        <div>
          <Link to="/login">
            <button>Sign In</button>
          </Link>
        </div>
      </div>
      <div className="signup__menu">
        <div className="signup__container">
          <h1>Unlimited movies, TV shows, and more.</h1>
          <h2>Whatch anywhere. Cancel anytime.</h2>
          <form>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>
            <div className="signup__inputes">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                placeholder="Email or phone number"
              />

              <input
                type="password"
                value={password}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />

              <button
                onClick={signIn}
                type="submit"
                className="signup__signinButton"
              >
                TRY 30 DAYS FREE >
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;

//Video (Day 3 - 1h20m)
