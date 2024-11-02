import React from "react";
import photo3 from "../Images/aboutme.jpg";
import sunlogo from "../Images/sunlogo.png";
import "./About.css";

const About: React.FC = () => {
  return (
    <div className="background-wrapper"> {/* Full-width background wrapper */}
      <div className="container">
        <div className="text-section">
          <div className="logoo">
            <div className="aboutmeheading">
              <h2 className="aboutmeheadingtext ">About me</h2>
            </div>

          </div>
          <p className="aboutmeparagraph">
            Hello! <img src={sunlogo} alt="sunlogo" className="inline-logo" /> I'm Namrata Mandal, an architect turned designer, currently pursuing a Master's in Interaction and Experience Design at the University of Limerick, Ireland.
            <br /><br />
            I began my career designing spaces that combined creativity with functionality, but my interest in product design eventually led me to the digital realm, where I could create experiences that people engage with directly.
            <br /><br />
            In making this transition, I found that my background in architecture has been invaluable it taught me to think spatially, consider how users interact with their surroundings, and design with intention.
            <br /><br />
            Now, as I dive deeper into interaction and experience design, I get to take those skills further, crafting digital spaces that are both intuitive and meaningful.
            <br /><br />
            I'm especially drawn to the intersection of design and technology, where I can use design to spark connections and inspire users.
           
            My goal is to create environments that not only meet practical needs but also encourage a deeper sense of engagement.
            <br /><br />
            Thank you for visiting my site! I'm excited to share my work, ideas, and journey with you.
          </p>
        </div>

        <div className="photoofme">
          <img className="photo3" src={photo3} alt="Namrata Mandal" />
        </div>
      </div>
    </div>
  );
};

export default About;
