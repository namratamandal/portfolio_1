import React from 'react';
import homeimage from '../Images/hometopimage.png';
import arrow from '../Images/arrow.png';
import png1 from '../Images/KPNG1.png';
import png2 from '../Images/KPNG2.png';
import png3 from '../Images/KPNG3.png';
import arrow2 from '../Images/arrowright.png';

import jpg5 from '../Images/worship.jpg';
import jpg6 from '../Images/house.jpg';
import jpg7 from '../Images/third.png';

import './Home.css';

const Home: React.FC = () => {
  return (
    <div className="main-container">
      {/* Navbar will be placed here or imported as a separate component */}

      {/* Home Container */}
      <div className="home-container">
        {/* Left Section with Title */}
        <div className="Hometop">
          <div className="yellow-ellipse"></div>
          <h1 className="title">
            <span>Who</span> is <br />
            Namrata Mandal?
          </h1>
          <div>
            <img className="arrowname" src={arrow} alt="arrow" />
          </div>
        </div>

        {/* Right Section with Introduction and Image */}
        <div className="right-section">
          <div className="intro-box">
            <p className="intro-text">
              Hello! I am Namrata Mandal, an architect with two years of professional experience. As I delve deeper into the realm of interaction design, I am excited to explore how technology and design intersect to create meaningful interactions. I am passionate about creating environments that not only meet practical needs but also foster connection and engagement. Welcome to my website, where I share my work and ideas!
            </p>
            <img className="profile-image" src={homeimage} alt="Namrata Mandal" />
          </div>
        </div>
      </div>

      <div className="freelance">
        <p className="freelancep">Available for freelance</p>
      </div>



                             {/* HOME MID */}



      {/* Combined Background Section */}
      <div className="homebottom">
        <div>
          <p className="bottomparaparagraph"> What I can do for you </p>
        </div>

        <div className="knowmesections">
          {/* Box 1 */}
          <div className="box box2">
            <img className="png1" src={png1} alt="png1" />
            <h2 className="headingh2">Product Design for Growth</h2>
            <p className="kpara1">
              I specialise in creating effective designs for startups. I can help with brainstorming, research, and growth experiments to make a real impact on your business. I can work with you to establish a design process and deliver designs that drive growth and connect with your audience.
            </p>
            <div className="kparabottom">
              <p className="kpara1_1">Let's chat</p>
              <img className="arrow2" src={arrow2} alt="arrow" />
            </div>
          </div>

          {/* Box 2 */}
          <div className="box box3">
            <img className="png2" src={png2} alt="png2" />
            <h2 className="headingh3">User-Centered Design Solutions</h2>
            <p className="kpara2">
            I focus on creating experiences that prioritize user needs. Through in-depth research and empathy-driven design, I ensure that every interaction feels intuitive and purposeful. I collaborate closely with clients to understand their users, creating tailored solutions that make their products not only functional but enjoyable to use.
            </p>
            <div className="kparabottom1">
              <p className="kpara2_1">Let's collaborate</p>
              <img className="arrow2" src={arrow2} alt="arrow" />
            </div>
          </div>

          {/* Box 3 */}
          <div className="box box4">
            <img className="png3" src={png3} alt="png3" />
            <h2 className="headingh4">Strategic Brand Identity</h2>
            <p className="kpara3">
            I help businesses build cohesive brand identities that resonate with their target audience. From visual design elements to tone and messaging, I ensure every detail aligns with your brand’s values and vision. By creating memorable and engaging brand experiences, I help establish trust and loyalty, setting your brand apart in a competitive market.
            </p>
            <div className="kparabottom2">
              <p className="kpara3_1">Let's connect</p>
              <img className="arrow2" src={arrow2} alt="arrow" />
            </div>
          </div>
        </div>

        
        {/* Project Section */}
        <div className="bottomprojects">
          {/* Box 5 */}
          <div className="box5 boxa">
            <img className="jpg5" src={jpg5} alt="jpg5" />
            <h2 className="headingbottom">Project One</h2>
          </div>

          {/* Box 6 */}
          <div className="box6 boxa">
            <img className="jpg6" src={jpg6} alt="jpg6" />
            <h2 className="headingbottom1">Project Two</h2>
          </div>

          {/* Box 7 */}
          <div className="box7 boxa">
            <img className="jpg7" src={jpg7} alt="jpg7" />
            <h2 className="headingbottom2">Project three</h2>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Home;
