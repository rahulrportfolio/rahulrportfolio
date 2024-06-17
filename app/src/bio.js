import React from "react";
import "./bio.css"; // Import your CSS file for styling
import me from "./me.png";

export const Bio = () => {
  return (
    <div className="container" style={{ paddingTop: 60 }}>
      <section>
        <div className="bioContainer">
          <div>
            <img src={me} alt="" className="me" />
          </div>
          <div className="bioText">
            <h2 style={{ fontSize: 40 }}>About Me</h2>
            <div className="bioFont">
              <p>
                As a computer science enthusiast, I'm on a mission to create
                cutting-edge products and solutions that not only make people's
                lives better but also keep them connected in innovative ways.
                I'm deeply committed to growing in the dynamic tech industry,
                where I relish the opportunity to tackle complex challenges and
                apply critical thinking skills to solve problems. I have a
                detail-oriented approach, laser focus, and knack for effective
                time management and tool utilization, I thrive in the world of
                tech. Moreover, I genuinely enjoy the continuous journey of
                learning and skill development. Throughout my academic career,
                my main goal is to evolve into a skilled software engineer. I
                believe that with each learning experience, I'm not just
                advancing my own capabilities, but contributing to the
                ever-evolving landscape of technology in a meaningful way.
              </p>
              <p>
                <em>
                  I wish for a future where technology and medicine enables
                  personalized care tailored to individuals, transcending the
                  limitations of generic approaches.
                </em>
              </p>
              <p>
                "How big would you dream if you knew you couldn't fail. The only
                thing stopping us is ourselves. Take that leap."
              </p>
            </div>
          </div>
        </div>
      </section>
      <br />
      <hr />

      <section>
        <div className="credContainer">
          <div className="skillsSection">
            <h2 style={{ fontSize: 40 }}>Skills</h2>
            <p className="bioFont">
              <b>Programming Languages:</b> C++, C, C#, Python, Swift, SQL,
              Java, Bash, Shell Scripting, HTML/CSS, JavaScript, R, MATLAB.
            </p>
            <p className="bioFont">
              <b>Technologies:</b> Git, MySQL, CUDA, PyTorch, React, Jupyter,
              Docker, Unity, AWS.
            </p>
            <p className="bioFont">
              <b>Operating Systems:</b> MacOS, Linux, Unix.
            </p>
          </div>
          <div className="educationSection">
            <h2 style={{ fontSize: 40 }}>Education</h2>
            <p className="bioFont">
              B.S. Computer Science
              <br />
              Concentration Machine Learning
            </p>
          </div>
        </div>
      </section>
      <br />
    </div>
  );
};
