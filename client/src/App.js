import { BrowserRouter, Routes, Route } from "react-router-dom";
// const express = require("express")

import Home from "../src/pages/Home/index.js";
import Contact from "../src/pages/Contact/index.js";
import Clients from "../src/pages/Clients/index.js";
import About from "../src/pages/About/index.js";
import Team from "../src/pages/Team/index.js";
import Work from "../src/pages/Work/index.js";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<About />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/team" element={<Team />} />
          <Route path="/work" element={<Work />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
