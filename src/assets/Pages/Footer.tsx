import React from 'react';
import emailIcon from '../Images/email.png';
import twitterIcon from '../Images/twitter.png';
import linkedinIcon from '../Images/LinkdIn.png';
import instagramIcon from '../Images/instagram.png';
import mediumIcon from '../Images/medium.png';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <div className="connect-box">
          <p className="connect-text">
            Let's connect <br />
            digitally
          </p>
        </div>
        <p className="project-info">
          Any project starts with goal setting. If you have a vision, I can design it.
          <br /><br />
          After the inquiry, I will reply within 2-3 working days, with an approximate quote for the project or with questions for more details. After that, we can have an intro call to discuss your project and see if it's a match.
        </p>
        <p className="footer-note">© 2024 Namrata Mandal</p>
      </div>

      {/* Footer Links with Icons */}
      <div className="footer-links">
        <a href="mailto:ar.namratamanda@gmail.com" className="footer-link">
          <img src={emailIcon} alt="Email" className="footer-icon" /> Email
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer" className="footer-link">
          <img src={twitterIcon} alt="Twitter" className="footer-icon" /> Twitter
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer" className="footer-link">
          <img src={linkedinIcon} alt="LinkedIn" className="footer-icon" /> LinkedIn
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer" className="footer-link">
          <img src={instagramIcon} alt="Instagram" className="footer-icon" /> Instagram
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer" className="footer-link">
          <img src={mediumIcon} alt="Medium" className="footer-icon" /> Medium
        </a>
      </div>
    </footer>
  );
};

export default Footer;
