import React from "react";
import "./homePage.css"; // Import your CSS file for styling
import me from "./me.png";
import Project from "./project";

export const Home = () => {
  return (
    <section>
      <div className="greetingContainer">
        <div>
          <img src={me} alt="" className="me" />
        </div>
        <div className="Info">
          <p>
            <h2 style={{ color: "purple" }}>Hello!</h2>
            <strong>
              I'm Rahul. Senior CS Student, Conc. Machine Learning.
              Software engineer
            </strong>
          </p>
        </div>
      </div>
      <hr className="rounded" />
      <Project />
    </section>
  );
};
