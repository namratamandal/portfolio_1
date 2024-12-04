import React from 'react'; // Importing React library to use React components
import homeimage from '../Images/hometopimage.png'; // Importing home top image
import arrow from '../Images/arrow.png'; // Importing arrow image
import png1 from '../Images/KPNG1.png'; // Importing png1 image
import png2 from '../Images/KPNG2.png'; // Importing png2 image
import png3 from '../Images/KPNG3.png'; // Importing png3 image
import arrow2 from '../Images/arrowright.png'; // Importing arrow right image

import jpg5 from '../Images/worship.jpg'; // Importing jpg5 image
import jpg6 from '../Images/house.jpg'; // Importing jpg6 image
import jpg7 from '../Images/third.png'; // Importing jpg7 image

import './Home.css'; // Importing CSS for styling the Home component

const Home: React.FC = () => { // Creating Home functional component
  return (
    <div className="main-container"> {/* Wrapping the entire content inside the main container */}

      {/* Home Container */}
      <div className="home-container"> {/* Creating a container for the home section */}
        
        {/* Left Section with Title */}
        <div className="Hometop"> {/* Creating the top section for the title */}
          <div className="yellow-ellipse"></div> {/* Adding a yellow ellipse */}
          <h1 className="title"> {/* Creating the main title */}
            <span>Who</span> is <br /> {/* Displaying the title with line break */}
            Namrata Mandal? {/* Displaying name */}
          </h1> 
          <div> 
            {/* Wrapper for arrow icon */}
            <img className="arrowname" src={arrow} alt="arrow" /> {/* Adding an arrow image */}
          </div>
        </div>

        {/* Right Section with Introduction and Image */}
        <div className="right-section"> {/* Creating right section */}
          <div className="intro-box"> {/* Creating a box for intro text and image */}
            <p className="intro-text"> {/* Adding the introduction text */}
              Hello! I am Namrata Mandal, an architect with two years of professional experience. As I delve deeper into the realm of interaction design, I am excited to explore how technology and design intersect to create meaningful interactions. I am passionate about creating environments that not only meet practical needs but also foster connection and engagement. Welcome to my website, where I share my work and ideas! 
            </p>
            <img className="profile-image" src={homeimage} alt="Namrata Mandal" /> {/* Adding the profile image */}
          </div>
        </div>
      </div>

      <div className="freelance"> 
        {/* Displaying freelance availability */}
        <p className="freelancep">Available for freelance</p> 
        {/* Displaying freelance text */}
      </div>

                             {/* HOME MID */}

      {/* Combined Background Section */}
      <div className="homebottom"> 
        {/* Creating the bottom section with combined background */}
        <div>
          <p className="bottomparaparagraph"> 
            {/* Displaying text: "What I can do for you" */}
            What I can do for you 
          </p>
        </div>

        <div className="knowmesections"> 
          {/* Creating a section for the different boxes */}
          
          {/* Box 1 */}
          <div className="box box2"> 
            {/* Creating the first box with class box2 */}
            <img className="png1" src={png1} alt="png1" /> 
            {/* Adding image png1 */}
            <h2 className="headingh2"> 
              {/* Adding heading for the box */}
              Product Design for Growth
            </h2> 
            <p className="kpara1"> 
              {/* Adding paragraph description for box 1 */}
              I specialise in creating effective designs for startups. I can help with brainstorming, research, and growth experiments to make a real impact on your business. I can work with you to establish a design process and deliver designs that drive growth and connect with your audience. 
            </p>
            <div className="kparabottom"> 
              {/* Creating a section at the bottom of the box */}
              <p className="kpara1_1">Let's chat</p> 
              {/* Displaying "Let's chat" */}
              <img className="arrow2" src={arrow2} alt="arrow" /> 
              {/* Adding an arrow image */}
            </div>
          </div>

          {/* Box 2 */}
          <div className="box box3"> 
            {/* Creating the second box with class box3 */}
            <img className="png2" src={png2} alt="png2" /> 
            {/* Adding image png2 */}
            <h2 className="headingh3"> 
              {/* Adding heading for the box */}
              User-Centered Design Solutions
            </h2>
            <p className="kpara2"> 
              {/* Adding paragraph description for box 2 */}
              I focus on creating experiences that prioritize user needs. Through in-depth research and empathy-driven design, I ensure that every interaction feels intuitive and purposeful. I collaborate closely with clients to understand their users, creating tailored solutions that make their products not only functional but enjoyable to use.
            </p>
            <div className="kparabottom1"> 
              {/* Creating a section at the bottom of the box */}
              <p className="kpara2_1">Let's collaborate</p> 
              {/* Displaying "Let's collaborate" */}
              <img className="arrow2" src={arrow2} alt="arrow" /> 
              {/* Adding an arrow image */}
            </div>
          </div>

          {/* Box 3 */}
          <div className="box box4"> 
            {/* Creating the third box with class box4 */}
            <img className="png3" src={png3} alt="png3" /> 
            {/* Adding image png3 */}
            <h2 className="headingh4"> 
              {/* Adding heading for the box */}
              Strategic Brand Identity
            </h2>
            <p className="kpara3"> 
              {/* Adding paragraph description for box 3 */}
              I help businesses build cohesive brand identities that resonate with their target audience. From visual design elements to tone and messaging, I ensure every detail aligns with your brand’s values and vision. By creating memorable and engaging brand experiences, I help establish trust and loyalty, setting your brand apart in a competitive market.
            </p>
            <div className="kparabottom2"> 
              {/* Creating a section at the bottom of the box */}
              <p className="kpara3_1">Let's connect</p> 
              {/* Displaying "Let's connect" */}
              <img className="arrow2" src={arrow2} alt="arrow" /> 
              {/* Adding an arrow image */}
            </div>
          </div>
        </div>

        
        {/* Project Section */}
        <div className="bottomprojects"> 
          {/* Creating a section for the project boxes */}
          {/* Box 5 */}
          <div className="box5 boxa"> 
            {/* Creating the fifth box with class boxa */}
            <img className="jpg5" src={jpg5} alt="jpg5" /> 
            {/* Adding image jpg5 */}
            <h2 className="headingbottom"> 
              {/* Adding heading for project 1 */}
              Project One
            </h2>
          </div>

          {/* Box 6 */}
          <div className="box6 boxa"> 
            {/* Creating the sixth box with class boxa */}
            <img className="jpg6" src={jpg6} alt="jpg6" /> 
            {/* Adding image jpg6 */}
            <h2 className="headingbottom1"> 
              {/* Adding heading for project 2 */}
              Project Two
            </h2>
          </div>

          {/* Box 7 */}
          <div className="box7 boxa"> 
            {/* Creating the seventh box with class boxa */}
            <img className="jpg7" src={jpg7} alt="jpg7" /> 
            {/* Adding image jpg7 */}
            <h2 className="headingbottom2"> 
              {/* Adding heading for project 3 */}
              Project three
            </h2>
          </div>

        </div>
      </div>
    </div>
  ); 
  // Closing return statement of Home component
};

export default Home; 
// Exporting Home component to be used elsewhere
