// Header.js
import React from 'react';
import './App.css'; // Import your CSS file for styling
import me from './me.png';
import gmail from './gmail.png';
import linkedin from './linkedin.png';
import github from './github.png';
import { Link } from 'react-router-dom';

export const Bio = () => {
    return (
        <div className="container" style={{paddingTop: 60}}>
            <section>
                <img src={me} alt='' class="me"/> 
                <h2 style={{fontSize: 40}}>About Me</h2>
                <p className='bioFont'> 
                    As a computer science enthusiast, I'm on a mission to create cutting-edge products and solutions that not only make people's lives better but also keep them connected in innovative ways. 
                    I'm deeply committed to growing in the dynamic tech industry, where I relish the opportunity to tackle complex challenges and apply critical thinking skills to solve problems.
                    I have a detail-oriented approach, laser focus, and knack for effective time management and tool utilization, I thrive in the world of tech. Moreover, I genuinely enjoy the continuous journey of learning and skill development.
                    Throughout my academic career, my main goal is to evolve into a skilled software engineer. I believe that with each learning experience, I'm not just advancing my own capabilities, 
                    but contributing to the ever-evolving landscape of technology in a meaningful way.
                </p>
                <p className='bioFont'>
                    <em>
                        I wish for a future where technology and medicine enables personalized care tailored to individuals, transcending the limitations of generic approaches.
                    </em>
                </p>
                <p className='bioFont'>
                    "How big would you dream if you knew you couldn't fail. The only thing stopping us is ourselves. Take that leap."
                </p>
            </section>
            <br/>
            <hr/>
            <div>
                <section style={{display: "flex"}}>
                    <div
                        style={{
                            float: 'left',
                            width: '50%'
                        }}
                    >
                        <h2 style={{fontSize: 40}}>Skills</h2>
                        <p className='bioFont'>
                            <b>Programming Languages:</b>  C++, C, C#, Python, Swift, SQL, Java, Bash, Shell Scripting, HTML/CSS, JavaScript, R, MATLAB.
                        </p>
                        <p className='bioFont'>    
                            <b>Technologies:</b> Git, MySQL, CUDA, PyTorch, React, Jupyter, Docker, Unity, AWS.
                        </p>    
                        <p className='bioFont'>
                            <b>Operating Systems:</b> MacOS, Linux, Unix.
                        </p>
                        
                    </div>
                    
                    <div
                    style={{
                            flex: 1,
                            float: 'right',
                            width: '50%'
                        }} 
                    >
                    <div className="vertical-line"></div>
                        <h2 style={{fontSize: 40}}>Education</h2>
                        <p className='bioFont'>
                            B.S. Computer Science
                            <br/>
                            Concentration Machine Learning
                        </p>
                    </div>
                </section>
            </div>
        <br/>
        </div>
    );
};

export const Project = () => {
    return (
        <p>

        </p>
    );
};

export const NavBar = () => {
  return (
    <div className="navbar">
 
            <Link className="left" to="/">Rahul Ramjeawon</Link>
            <Link className="right" to="/project">Project</Link>  
            <Link className="right" to="/bio">Bio</Link>
            <Link className="right" to="/">Home</Link>   

    </div>
  );
};


export const Home = () => {
    return (
        <div className='container'>
        
            <div className="greeting">
                <section className="sec">
                <img src={me} alt='' class="me"/>
                    <h2 style={{color: "purple"}}>Hello!</h2>
                    <p>
                        <strong>
                            I'm Rahul, a Senior Computer Science Student
                            with a Concentration in Machine Learning. 
                        </strong>
                    </p>
                </section>
            </div>
            <hr class="rounded"/>
        </div>
    );
};

export const Contact = () => {
    return (
    <section >
        <div className="container">
        <br/>
        <hr class="rounded"/>
            <h2>Contact Me</h2>
            <div className="contact-links">
                <strong>
                    <a href="mailto:tejinquiries@gmail.com"><img src={gmail} alt="Gmail" style={{ width: 30, height: 30}}/></a>
                    <a href="https://www.linkedin.com/in/rahulramjeawon/" style={{paddingLeft: 20}}><img src={linkedin} alt="Linkedin" style={{ width: 30, height: 30}}/></a>
                    <a href="https://github.com/CodeWithTejpratab" style={{paddingLeft: 20}}><img src={github} alt="Github" style={{ width: 30, height: 30}}/></a>
                </strong>
            </div>
        </div>
    </section>
    );
};