import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom"; /* Importing Router and routing components */
import Navbar from "./assets/Pages/Navbar"; /* Importing Navbar component */
import Home from "./assets/Pages/Home"; /* Importing Home page component */
import About from "./assets/Pages/About"; /* Importing About page component */
import Blog from "./assets/Pages/Blog"; // Blog component integrated with Redux
import Works from "./assets/Pages/Works"; /* Importing Works page component */
import Contact from "./assets/Pages/Contact"; /* Importing Contact page component */
import Footer from "./assets/Pages/Footer"; /* Importing Footer component */
import "bootstrap/dist/css/bootstrap.min.css"; // Importing Bootstrap for consistent styling
import "./App.css"; // Importing global styles for the app

const App: React.FC = () => {
  return (
    <Router> {/* Wrapping the entire app with Router to enable routing */}
      <div className="app"> {/* Main app wrapper */}
        
        {/* Navbar is displayed on all pages */}
        <Navbar /> {/* Displaying Navbar across all pages */}

        {/* Main content area */}
        <div className="content-wrapper"> {/* Wrapping the main content for styling */}
          <main className="main-content"> {/* Main content wrapper */}
            <Routes> {/* Defining different routes for the app */}
              <Route path="/" element={<Home />} /> {/* Route for Home page */}
              <Route path="/home" element={<Home />} /> {/* Optional route for Home page */}
              <Route path="/about" element={<About />} /> {/* Route for About page */}
              <Route path="/blog" element={<Blog />} /> {/* Route for Blog page with Redux integration */}
              <Route path="/works" element={<Works />} /> {/* Route for Works page */}
              <Route path="/contact" element={<Contact />} /> {/* Route for Contact page */}
              <Route path="*" element={<Navigate to="/" />} /> {/* Redirecting unknown routes to Home */}
            </Routes>
          </main>
        </div>

        {/* Footer is displayed on all pages */}
        <Footer /> {/* Displaying Footer across all pages */}
      </div>
    </Router>
  );
};

export default App; /* Exporting App component for use in other parts of the app */
