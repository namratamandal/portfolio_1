import React from 'react';
import thumbnail1 from "../Images/tumbnail1.jpg"
import thumbnail2 from "../Images/thumbnail2.jpg"
import thumbnail3 from "../Images/thumbnail3.jpg"
import playButtonIcon from "../Images/youtube.png"; 
import thumbnailImage from "../Images/1background.jpg";
import './Blog.css';;

const Blog: React.FC = () => {
  return (
    <div className="blog-background">
      
      {/* Blog Entry One */}
      <div className="blog-container">
        <div className="blog-image">
          <img className="thumbnail1" src={thumbnail1} alt="Blog Post One" />
        </div>
        <div className="text-section">
          <h2 className="blog-heading">
          Professional Headshot: A Polished Look</h2>
          <p className="blog-content">
          In my headshot, I aimed to create a straightforward and approachable image, capturing a confident, professional side. With an aperture of f/1.8, I achieved a soft background blur, keeping the focus entirely on my face.
          Using GIMP, I kept the editing minimal, focusing on contrast adjustments to bring out texture details and adding a slight brightness increase for a refined effect. I also converted the original color image to black and white, achieving a clean, natural look with a subtle polish.
          <br />
          The ISO 250 setting balanced the natural light streaming from the bedroom window, creating a warm, natural glow without washing out the details. The 1/60 shutter speed preserved the sharpness, capturing a moment that feels both poised and natural. 
          <br />
          <br />
          Wearing black helped simplify the image, making it visually clean and timeless. The choice of a direct gaze and gentle smile completes the professional aesthetic, projecting confidence and approachability qualities essential in a headshot that reflects authenticity and warmth.
          </p>
          <br />

          <div className='blog1'>Aperture of f/1.8 | ISO 250 | 1/60 shutter speed | 6.76mm focal length | Model- Iphone 15 pro raw</div>
        </div>
      </div>

      {/* Blog Entry Two */}
      <div className="blog-container">
        <div className="blog-image">
          <img className="thumbnail2" src={thumbnail2} alt="Blog Post Two" />
        </div>
        <div className="text-section">
          <h2 className="blog-heading">Aesthetic Shot: Cozy and Carefree</h2>
          <p className="blog-content">
          For the aesthetic shot, I wanted a relaxed, playful feel, showing a candid side. With the same f/1.8 aperture, paired with a 1/89 shutter speed and ISO 100, I captured a well-lit, airy image that feels welcoming. 
          
          I converted the image to black and white by following these steps: I first opened the image, navigated to "Colors" in the menu, selected "Desaturate," and chose the optimal mode for the desired grayscale effect. This simple process allowed the textures to stand out, achieving a professional look with a personal touch.
          <br />
          
          The natural light from the window adds a soft, gentle glow, enhancing the relaxed vibe. The wider aperture creates a dreamy background blur, placing focus on my expression without overly sharp details that might make it feel staged.A shorter exposure time (like 1/171 second) means the sensor is exposed to light for a brief moment, which helps capture fast-moving subjects without blur but requires good lighting.
          <br />
          <br />
          This photo radiates a cozy, carefree vibe, highlighting my personality in a spontaneous, lighthearted way. It's an invitation to see a more genuine, fun side—different from the formal headshot but equally reflective of who I am.
          </p>
          <br />

          <div>
          <div className='blog1'>Aperture of f/1.8 | ISO 100 | 1/89 shutter speed | 6.76mm focal length | Model- Iphone 15 pro raw</div>
          </div>
        </div>
      </div>

      {/* Blog Entry Three */}
      <div className="blog-container">
        <div className="blog-image">
          <img className="thumbnail3" src={thumbnail3} alt="Blog Post Three" />
        </div>
        <div className="text-section">
          <h2 className="blog-heading">Passionate Moment: A Love for Design</h2>
          <p className="blog-content">
          The final image captures my passion for design through an intimate moment with books. I selected a 1/171 shutter speed to preserve fine details while keeping the shot soft and personal. 
          <br />
          <br />
          With an aperture of f/1.8 and a lower ISO of 64, the lighting remains gentle, balancing the warmth of the window light with the quiet focus of reading. The settings allow the scene to stay crisp yet grounded, emphasizing my concentration and connection with the books. 
          <br />
          <br />
          The image gained a bold, punchy feel, capturing the stunning natural light from the window. Using GIMP, I converted it to black and white by navigating to "Colors" and selecting "Desaturate."
          <br />
    
          his photo showcases my commitment to continuous learning and growth, highlighting a reflective side that is dedicated and curious. It represents my love for design, inviting the viewer to glimpse an important aspect of my identity.
          </p>
          <br />

          <div>
          <div className='blog1'>Aperture of f/1.8 | ISO 64 | 1/171 shutter speed | 6.76mm focal length | Model- Iphone 15 pro raw</div>
          </div>

      
      </div>
      </div>
        {/* Video Thumbnail with Caption */}
      <div className="video-section">
        <div className="video-thumbnail" onClick={() => window.open("https://www.youtube.com/watch?v=example", "_blank")}>
          <img src={thumbnailImage} alt="Video Thumbnail" className="thumbnail-image" />
          <img src={playButtonIcon} alt="Play Button" className="play-button" />
        </div>
        <p className="video-caption">Catch Our Daily Vlogs - Watch Now!</p>
      </div>
    </div>
  

  );
};

export default Blog;
