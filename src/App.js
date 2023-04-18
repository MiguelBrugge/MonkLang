import './App.css';
import './pages.css'
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navigation from "./Components/navigation";
import Home from "./home";
import About from "./about";
import Help from "./help";


function App() {
  const [page, setPage] = useState("Home");
  const getPage = () => {
    switch (page) {
      case "Home": return <Home setPage={setPage} />
      case "About": return <About />
      case "Help": return <Help setPage={setPage} />
    }
  }
  return (
    <div className="App">
      <Navigation page={page} setPage={setPage} />
      {getPage()}
    </div>
  );
}

export default App;
