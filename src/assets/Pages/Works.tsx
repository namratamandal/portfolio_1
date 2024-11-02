import React from 'react';
import projectone from "../Images/projectone.jpg";
import projecttwo from "../Images/projecttwo.jpg";
import projectthree from "../Images/projectthree.jpg";
import './Works.css';

const Works: React.FC = () => {
  return (
    <div className="background-wrapper">
      {/* Project One */}
      <div className="project-container">
        <div className="text-section">
          <h2 className="project-heading">Project One</h2>
          <p className="project-paragraph">
          This project in Alleppey, Kerala, was designed for a family of four, thoughtfully combining traditional Kerala architecture with modern functionality. To adapt to Kerala's warm climate, the house centers around a courtyard that serves as a natural cooling system, allowing fresh air to circulate throughout. 
          <br />
          <br />
      
          The courtyard is the most favourite space for the famile. The home's design embraces elements like sloped tiled roofs, spacious verandas, and wide windows, allowing natural light and ventilation to flow in effortlessly. We used locally sourced materials, adding wooden detailing and exposed brickwork that seamlessly blend with the landscape, giving the home an earthy, organic appeal. 
          <br />
          <br />
          Each room is designed to open into the courtyard, connecting the family to nature and fostering a breezy, relaxed atmosphere that reflects Kerala's architectural heritage and climate-responsive design.

          </p>
        </div>
        <div className="project-image">
          <img className="project-photo" src={projectone} alt="Project One" />
        </div>
      </div>

      {/* Project Two */}
      <div className="project-container">
        <div className="text-section">
          <h2 className="project-heading">Project Two</h2>
          <p className="project-paragraph">
          This residential project in Goa was designed as a serene retreat for a family, blending local architectural traditions with modern comforts.
          <br />
          <br />
           Inspired by the tranquility of Goan villas, the house is structured around a central courtyard that encourages airflow and maximizes natural light, creating a cooling effect against the tropical climate. 
           <br />
           <br />
           Expansive verandas, traditional red laterite stone walls, and sloping terracotta tile roofs merge seamlessly with the surroundings, offering a cozy yet open ambiance. Large, strategically placed windows and open-plan interiors provide views of lush greenery, while wooden louvered shutters maintain privacy. 
           <br />
           <br />
           Sustainable materials and energy-efficient systems were incorporated to reduce environmental impact, making this home both aesthetically pleasing and environmentally friendly—a true Goan sanctuary.

          </p>
        </div>
        <div className="project-image">
          <img className="project-photo" src={projecttwo} alt="Project Two" />
        </div>
      </div>

      {/* Project Three */}
      <div className="project-container">
        <div className="text-section">
          <h2 className="project-heading">Project Three</h2>
          <p className="project-paragraph">
          This project in Goa was envisioned as a serene spiritual retreat, inspired by iconic architectural marvels like the Lotus Temple and Matrimandir. 
          <br />
          <br />
          Embracing a circular form, the structure features a series of petal-like facades that evoke the fluidity and symmetry of a lotus, symbolizing purity and peace. 
          <br />
          <br />
          The building's design integrates sustainable materials and local Goan aesthetics, combining exposed laterite stone and natural textures to blend harmoniously with the lush landscape. 
          <br />
          <br />
          The interiors are minimalist, fostering a meditative space that emphasizes light and openness, while pathways guide visitors in a gentle spiral, drawing them towards the central meditation area. 
          <br />
          <br />
          Here, an open skylight enhances a deep connection to nature, symbolizing unity and enlightenment. 

          </p>
        </div>
        <div className="project-image">
          <img className="project-photo" src={projectthree} alt="Project Three" />
        </div>
      </div>
    </div>
  );
};

export default Works;
