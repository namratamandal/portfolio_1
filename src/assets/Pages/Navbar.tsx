import React from 'react'; // Importing React library
import { NavLink } from 'react-router-dom';  // Importing NavLink for navigation with active class functionality
import navbarlogo from '../Images/Navbarlogo.jpg'; // Importing logo image
import './Navbar.css'; // Importing Navbar CSS file

const Navbar: React.FC = () => {  // Defining Navbar component as a React Functional Component
  return (
    <div className="content-wrapper"> {/* Wrapping the navbar content for centering */}
      <div className="navbar"> {/* Navbar container */}
        <div className="navbar-container"> {/* Container for navbar content */}
          
          {/* Logo Image */}
          <img className="navbar-logo" alt="Navbar Logo" src={navbarlogo} /> {/* Displaying the navbar logo */}

          {/* Navigation Links */}
          <ul className="navbar-links"> {/* List of navigation links */}
            <li>
              <NavLink to="/" className={({ isActive }) => isActive ? "navbar-link active" : "navbar-link"}>
                Home {/* Navigation link for Home */}
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={({ isActive }) => isActive ? "navbar-link active" : "navbar-link"}>
                About {/* Navigation link for About */}
              </NavLink>
            </li>
            <li>
              <NavLink to="/works" className={({ isActive }) => isActive ? "navbar-link active" : "navbar-link"}>
                Works {/* Navigation link for Works */}
              </NavLink>
            </li>
            <li>
              <NavLink to="/blog" className={({ isActive }) => isActive ? "navbar-link active" : "navbar-link"}>
                Blog {/* Navigation link for Blog */}
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={({ isActive }) => isActive ? "navbar-link active" : "navbar-link"}>
                Contact {/* Navigation link for Contact */}
              </NavLink>
            </li>
          </ul> {/* Closing navigation links list */}
        </div> {/* Closing navbar-container */}
      </div> {/* Closing navbar */}
    </div> /* Closing content-wrapper */
  );
};

export default Navbar;  // Exporting the Navbar component for use in other parts of the app
