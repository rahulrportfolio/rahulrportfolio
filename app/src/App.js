import './App.css';
import {NavBar, Contact} from './components';
import { Home } from './homepage';
import { Bio } from './bio';
import Project from './project';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react'

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bio" element={<Bio />} />
          <Route path="/project" element={<Project />} />
        </Routes>
    </Router>
    <Contact />
    </div>
  );
}

export default App;