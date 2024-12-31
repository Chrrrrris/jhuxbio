import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

/* Sections (single-page layout) */
import Hero from "./home/Hero";
import About from "./home/About";
import Membership from "./home/Membership";
import Events from "./home/Events";
import Contact from "./home/Contact";

/* Separate Team and Gallery Page */
import Team from "./team/Team";
import Gallery from "./gallery/Gallery";


function App() {
  return (
    <Router>
      <div className="font-sans text-gray-800">
        <Navbar />
        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <div>
                <Hero id="home" />
                <About id="about" />
                <Events id="events" />
                <Membership id="membership" />
                <Contact id="contact" />
              </div>
            }
          />

          {/* Team Page */}
          <Route path="/team" element={<Team />} />
          {/* Gallery Page */}
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
