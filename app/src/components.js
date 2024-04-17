// Header.js
import React from 'react';
import './App.css'; // Import your CSS file for styling
import me from './me.png';


export const Header = () => {
    return (
        <header className="fixed-header">
            <h1 className='text'>
                <strong>
                    Rahul Ramjeawon
                </strong>
            </h1>
        </header>
    );
};

export const Greeting = () => {
    return (
        <div className='container'>
            <div className="greeting">
                <section style={{width: 800, height: 500, paddingLeft: 210, paddingTop: 160}}>
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
            <hr></hr>
        </div>
    );
};
