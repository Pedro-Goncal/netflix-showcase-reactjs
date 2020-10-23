import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../Firebase";

import "./Nav.css";

function Nav({ user }) {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll", window);
    };
  }, []);

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        className="nav__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Logo_Netflix.png"
        alt="Netflix Logo"
      />
      <Link to="/login">
        <img
          onClick={handleAuthentication}
          className="nav__avatar"
          src="https://learning.royalbcmuseum.bc.ca/wp-content/uploads/2014/07/netflix-face.jpg"
          alt="Netflix avatar"
        />
      </Link>
      <div className="nav__username">
        <p>{user ? `Hello ${user.email}` : "Sign in"}</p>
        <p>{user ? "Sign out" : null}</p>
      </div>
    </div>
  );
}

export default Nav;
