import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./assets/Pages/Navbar";
import Home from "./assets/Pages/Home";
import About from "./assets/Pages/About";
import Blog from "./assets/Pages/Blog"; // Blog component integrated with Redux
import Works from "./assets/Pages/Works";
import Contact from "./assets/Pages/Contact";
import VideoBlog from "./assets/Pages/VideoBlog";
import Footer from "./assets/Pages/Footer";
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap styles for consistent design
import "./App.css"; // Global app styles

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        {/* Navbar is displayed on all pages */}
        <Navbar />

        {/* Main content area */}
        <div className="content-wrapper">
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} /> {/* Home page */}
              <Route path="/home" element={<Home />} /> {/* Optional route for Home */}
              <Route path="/about" element={<About />} /> {/* About page */}
              <Route path="/blog" element={<Blog />} /> {/* Blog page with Redux */}
              <Route path="/works" element={<Works />} /> {/* Works page */}
              <Route path="/contact" element={<Contact />} /> {/* Contact page */}
              <Route path="/videoblog" element={<VideoBlog />} /> {/* Video Blog page */}
              <Route path="*" element={<Navigate to="/" />} /> {/* Redirect unknown routes to Home */}
            </Routes>
          </main>
        </div>

        {/* Footer is displayed on all pages */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
