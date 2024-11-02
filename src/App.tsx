import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './assets/Pages/Navbar';
import Home from './assets/Pages/Home';
import About from './assets/Pages/About';
import Blog from './assets/Pages/Blog';
import Works from './assets/Pages/Works';
import Contact from './assets/Pages/Contact';
import VideoBlog from './assets/Pages/VideoBlog';
import Footer from './assets/Pages/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <Navbar /> {/* Always display Navbar */}
        
        <div className="content-wrapper">
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} /> {/* Default route for Home */}
              <Route path="/home" element={<Home />} /> {/* Optional separate path for Home */}
              <Route path="/about" element={<About />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/works" element={<Works />} /> {/* Correct path for LatestWorks */}
              <Route path="/contact" element={<Contact />} />
              <Route path="/videoblog" element={<VideoBlog />} />
              <Route path="*" element={<Navigate to="/" />} /> {/* Redirect unknown paths to Home */}
            </Routes>
          </main>
        </div>

        <Footer /> {/* Always display Footer */}
      </div>
    </Router>
  );
};

export default App;
