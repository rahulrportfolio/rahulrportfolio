import React from "react";
import "./project.css"; // Import your CSS file for styling

const projects = [
  {
    title: "IOS-app-Matrix-calculator",
    description:
      "Description of another project goes here. This project is also built using React and other modern web technologies.",
    imageUrl: "https://codewithtejpratab.github.io/Portfolio/Portfolio/app.png",
    imageAlt: "Placeholder image",
  },
  {
    title: "Saving the Cookie Monster",
    description:
      "A captivating React app centered around solving word puzzles to rescue our adorable feline friend, the Cookie Monster! Inspired by a real cat. Whiskey is a wanted cat all around Cat City for stealing cookies. Because of that he has been given the name Cookie Monster. The meow corp is hot on his paws. If he is caught he'll be sentenced for life in Meow Pound. What are you waiting for? Join the exciting journey of wordplay and adventure! This project was created with React, JavaScript, and HTML/CSS.",
    imageUrl: "https://codewithtejpratab.github.io/Portfolio/Portfolio/cat.png",
    imageAlt: "A picture of a cat",
  },
  {
    title: "Netflix Database",
    description:
      "Description of another project goes here. This project is also built using React and other modern web technologies.",
    imageUrl: "https://codewithtejpratab.github.io/Portfolio/Portfolio/data.png",
    imageAlt: "Placeholder image",
  },
  {
    title: "What-To-Wear",
    description:
      "A simple automated script, that runs on startup. Starting with ZSHELL (zsh) scripting Language, I coded a script that would communicate with Apple's iMessage to send a text message to any phone number that is provided to the script. Then using an API from open-weather-map to gather temperature information. It sends a text message to the user stating what to wear based on the Temperature outside. What's cool about this, is that you can have a file filled with phone numbers of family or friends who live in the same area. The program would be able to send this message to each individual number. Feel free the view this project on my Github.",
    imageUrl: "https://codewithtejpratab.github.io/Portfolio/Portfolio/weather.png",
    imageAlt: "Placeholder image",
  },
  // Add more project objects here if needed
];

const ProjectDetails = ({ projectInfo }) => {
  return (
    <div className="Container">
      <div className="blockContainer">
        <div className="textBox">
          <h1>{projectInfo.title}</h1>
          <p>{projectInfo.description}</p>
        </div>
        <div className="videoFrame">
          <img className="pojectImage" src={projectInfo.imageUrl} alt={projectInfo.imageAlt} />
        </div>
      </div>
    </div>
  );
};

const Project = () => {
  return (
    <div>
      {projects.map((project, index) => (
        <ProjectDetails key={index} projectInfo={project} />
      ))}
    </div>
  );
};

export default Project;
