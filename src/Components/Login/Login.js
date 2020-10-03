import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../Firebase";
import FacebookIcon from "@material-ui/icons/Facebook";

import "./Login.css";

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
    <div className="loginlogin">
      <div className="login__banner">
        <Link to="/">
          <img
            className="nav__logo__login"
            src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Logo_Netflix.png"
            alt="Netflix Logo"
          />
        </Link>
      </div>
      <div className="login">
        <div className="login__container">
          <h1>Sign in</h1>
          <form>
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
              className="login__signinButton"
            >
              Sign In
            </button>
            <div className="login__checkbox">
              <div>
                <input type="checkbox" />
                <label>Remember me</label>
              </div>
              <p>Need help?</p>
            </div>
          </form>
          <div className="login__container__bottom">
            <div className="login__facebook">
              <FacebookIcon className="facebook__icon" />
              <p>Log in with Facebook</p>
            </div>
            <div className="login__container__bottom__signup">
              <p>
                New to Netflix? <span onClick={register}>Sign up now</span>
              </p>
            </div>
            <div className="login__container__bottom__captcha">
              <p>
                This page is protected by Google reCAPTCHA to ensure you're not
                a bot.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

//Video (Day 3 - 1h20m)
