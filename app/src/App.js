import './App.css';
import {Project, Bio, Home, NavBar, Contact} from './components';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

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