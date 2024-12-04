import React from "react"; // Importing React
import photo3 from "../Images/aboutme.jpg"; // This is my photo
import sunlogo from "../Images/sunlogo.png"; // This is the sun logo, added inline in the paragraph
import "./About.css"; // This is the CSS file for styling the About section

const About: React.FC = () => {
  return (
    <div className="background-wrapper"> {/* Full-width background wrapper */}
      <div className="container"> {/* Container that holds all content and keeps everything centered */}
        
        <div className="text-section"> {/* Section for text content */}
          <div className="logoo"> {/* Section for logo and heading */}
            <div className="aboutmeheading"> {/* About me heading section */}
              <h2 className="aboutmeheadingtext ">About me</h2> {/* This is the heading text */}
            </div>
          </div>

          <p className="aboutmeparagraph"> {/* This paragraph contains my introduction */}
            Hello! <img src={sunlogo} alt="sunlogo" className="inline-logo" /> I'm Namrata Mandal, an architect turned designer, currently pursuing a Master's in Interaction and Experience Design at the University of Limerick, Ireland.
            <br /><br />
            I began my career designing spaces that combined creativity with functionality, but my interest in product design eventually led me to the digital realm, where I could create experiences that people engage with directly.
            <br /><br />
            In making this transition, I found that my background in architecture has been invaluable. It taught me to think spatially, consider how users interact with their surroundings, and design with intention.
            <br /><br />
            Now, as I dive deeper into interaction and experience design, I get to take those skills further, crafting digital spaces that are both intuitive and meaningful.
            <br /><br />
            I'm especially drawn to the intersection of design and technology, where I can use design to spark connections and inspire users.
            <br /><br />
            My goal is to create environments that not only meet practical needs but also encourage a deeper sense of engagement.
            <br /><br />
            Thank you for visiting my site! I'm excited to share my work, ideas, and journey with you.
          </p>
        </div>

        <div className="photoofme"> {/* Section for my photo */}
          <img className="photo3" src={photo3} alt="Namrata Mandal" /> {/* This is my photo */}
        </div>
      </div>
    </div>
  );
};

export default About;
