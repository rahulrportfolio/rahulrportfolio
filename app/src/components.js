// Header.js
import React from "react";
import "./App.css"; // Import your CSS file for styling
import gmail from "./gmail.png";
import linkedin from "./linkedin.png";
import github from "./github.png";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div className="navbar">
      <Link className="left" to="/">
        Rahul Ramjeawon
      </Link>
      <Link className="right" to="/project">
        Project
      </Link>
      <Link className="right" to="/bio">
        Bio
      </Link>
      <Link className="right" to="/">
        Home
      </Link>
    </div>
  );
};

export const Contact = () => {
  return (
    <section>
      <div className="container">
        <br />
        <hr className="rounded" />
        <h2>Contact Me</h2>
        <div className="contact-links">
          <strong>
            <a href="mailto:tejinquiries@gmail.com">
              <img src={gmail} alt="Gmail" style={{ width: 30, height: 30 }} />
            </a>
            <a
              href="https://www.linkedin.com/in/rahulramjeawon/"
              style={{ paddingLeft: 20 }}
            >
              <img
                src={linkedin}
                alt="Linkedin"
                style={{ width: 30, height: 30 }}
              />
            </a>
            <a
              href="https://github.com/CodeWithTejpratab"
              style={{ paddingLeft: 20 }}
            >
              <img
                src={github}
                alt="Github"
                style={{ width: 30, height: 30 }}
              />
            </a>
          </strong>
        </div>
      </div>
    </section>
  );
};
