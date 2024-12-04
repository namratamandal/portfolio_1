import React from 'react'; // Importing React 
import emailIcon from '../Images/email.png'; // Importing email icon image
import twitterIcon from '../Images/twitter.png'; // Importing twitter icon image
import linkedinIcon from '../Images/LinkdIn.png'; // Importing linkedin icon image
import instagramIcon from '../Images/instagram.png'; // Importing instagram icon image
import mediumIcon from '../Images/medium.png'; // Importing medium icon image
import './Footer.css'; // Importing CSS for footer styling

const Footer: React.FC = () => { // Creating the Footer functional component
  return (
    <footer className="footer"> {/* Footer container */}
      <div className="footer-left"> {/* Left section of the footer */}
        <div className="connect-box"> {/* Connect box for the digital connection message */}
          <p className="connect-text"> {/* Text in the connect box */}
            Let's connect <br />
            digitally
          </p>
        </div>
        <p className="project-info"> {/* Text about how to initiate a project */}
          Any project starts with goal setting. If you have a vision, I can design it.
          <br /><br />
          After the inquiry, I will reply within 2-3 working days, with an approximate quote for the project or with questions for more details. After that, we can have an intro call to discuss your project and see if it's a match.
        </p>
        <p className="footer-note">© 2024 Namrata Mandal</p> {/* Footer copyright text */}
      </div>

      {/* Footer Links Section */}
      <div className="footer-links"> {/* Container for footer links */}
        <a href="mailto:ar.namratamanda@gmail.com" className="footer-link"> {/* Email link */}
          <img src={emailIcon} alt="Email" className="footer-icon" /> Email {/* Email icon and text */}
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer" className="footer-link"> {/* Twitter link */}
          <img src={twitterIcon} alt="Twitter" className="footer-icon" /> Twitter {/* Twitter icon and text */}
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer" className="footer-link"> {/* LinkedIn link */}
          <img src={linkedinIcon} alt="LinkedIn" className="footer-icon" /> LinkedIn {/* LinkedIn icon and text */}
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer" className="footer-link"> {/* Instagram link */}
          <img src={instagramIcon} alt="Instagram" className="footer-icon" /> Instagram {/* Instagram icon and text */}
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer" className="footer-link"> {/* Medium link */}
          <img src={mediumIcon} alt="Medium" className="footer-icon" /> Medium {/* Medium icon and text */}
        </a>
      </div>
    </footer>
  );
};

export default Footer; {/* Exporting Footer component for use in other parts of the app */}
