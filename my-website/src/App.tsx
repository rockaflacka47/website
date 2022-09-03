import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Album from "./components/Album";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Nav from "./components/nav";
import Intro from "./components/Intro";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <div className="App">
        {/* <Album /> */}
        <Nav />
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="projects" element={<Album />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
