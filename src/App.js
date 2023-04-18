import './App.css';
import'./pages.css'
import {Routes, Route } from "react-router-dom";
import Home from "./home";
import About from "./about";
import Help from "./help";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Help" element={<Help />} />
      </Routes>
    </div>
  );
}

export default App;
