import React from 'react';
import './Contact.css';

const Contact: React.FC = () => {
  return (
    <div className="contact-container">
      {/* Left Section */}
      <div className="contact-text">
        <h1>Tell me about your <br /> project</h1>
        <p>Any project starts with goal setting. If you have a vision, I can design it.</p>
        <p>
          After the inquiry, I will reply within 2-3 working days, with an approximate quote for the project or with questions for more details. After that, we can have an intro call to discuss your project and see if it's a match.
        </p>
        <p>Email me at <strong>ar.namratamanda@gmail.com</strong></p>
      </div>

      {/* Right Section - Contact Form */}
      <form className="contact-form">
        <div className="input-row">
          <input type="text" placeholder="Your name" />
          <input type="email" placeholder="Your email" />
        </div>
        <div className="input-row">
          <input type="text" placeholder="Project type" />
          <input type="text" placeholder="Budget" />
        </div>
        <input type="text" placeholder="Your website (if exists)" />
        <textarea placeholder="Project details, context, how can I help you..."></textarea>
        <button type="submit">Get in touch</button>
      </form>
    </div>
  );
};

export default Contact;
