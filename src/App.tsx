import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Album from "./components/Album";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Nav from "./components/nav";
import Intro from "./components/Intro";
import { Copyright } from "./components/Copyright";
import Acro from "./components/Acro";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/projects" element={<Album />} />
          <Route path="/acro" element={<Acro />} />
        </Routes>
        <Copyright />
      </div>
    </BrowserRouter>
  );
}

export default App;
