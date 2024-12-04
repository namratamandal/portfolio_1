import React, { useState } from "react"; // // Importing React 
import { useSelector, useDispatch } from "react-redux"; // I use Redux hooks to interact with the global state.
import { RootState, AppDispatch } from "../../Redux/store"; // Importing types to define the structure of the global state and dispatcher in Redux.
import { incrementLikes, addComment, addEmoji } from "../../Redux/blogSlice"; // I import Redux actions to handle blog interactions: likes, comments, and emojis.

// Thumbnails for blog posts
import thumbnail1 from "../Images/tumbnail1.jpg"; // Thumbnail for Blog 1: "Professional Headshot".
import thumbnail2 from "../Images/thumbnail2.jpg"; // Thumbnail for Blog 2: "Aesthetic Shot".
import thumbnail3 from "../Images/thumbnail3.jpg"; // Thumbnail for Blog 3: "Passionate Moment".

// Play button icon for video blogs
import playButtonIcon from "../Images/youtube.png"; // Adding a YouTube play button icon overlay for video blogs.

// Background image for the video blog
import thumbnailImage from "../Images/1background.jpg"; // Thumbnail image for Blog 4: "Behind the Lens".

// Behind-the-scenes images for Blog 4
import bts from "../Images/bts.jpg"; // Behind-the-scenes image 1 for "Behind the Lens".
import bts2 from "../Images/bts2.jpg"; // Behind-the-scenes image 2 for "Behind the Lens".
import bts3 from "../Images/bts3.jpg"; // Behind-the-scenes image 3 for "Behind the Lens".

// Blog styling
import "./Blog.css"; // Importing CSS to style the Blog component layout and visuals.


const blogs = [
  {
    id: 1, // Unique ID for the blog post
    type: "image", // Type of content (this is an image blog)
    title: "Professional Headshot: A Polished Look", // Blog title
    content: `
      In my headshot, I aimed to create a simple yet approachable image, capturing a confident and professional side of myself. With an aperture of f/1.8, I achieved a soft background blur that keeps the focus on my face. Using GIMP, I kept the edits minimal, adjusting contrast to highlight texture details and slightly increasing the brightness for a polished look. I also converted the color image to black and white, giving it a clean, natural feel with a subtle refinement.

      <br /><br />

      The ISO 250 setting balanced the natural light from the bedroom window, creating a warm, glowing effect without losing detail. The 1/60 shutter speed maintained sharpness, capturing a moment that feels both poised and genuine. Wearing black simplified the image, providing a clean, timeless look. A direct gaze and gentle smile complete the professional vibe, projecting confidence and approachability. This photo reflects my authenticity and warmth. Overall, the headshot conveys a balance between confidence, relatability, and simplicity, making it ideal for professional settings. It offers a polished yet approachable image that remains timeless. The soft background blur directs attention to my face, making the photo feel intimate yet professional.
      
      <br /><br />
      
      The black-and-white conversion enhances its timeless quality, allowing viewers to connect with the genuine emotion in the portrait. The clean, minimalistic style ensures the image remains versatile for various professional uses, from resumes to social media profiles. This headshot reflects a calm, confident individual, ready to engage and connect with others.
    `, // Content of the blog post with some description.

    metadata: "Aperture of f/1.8 | ISO 250 | 1/60 shutter speed | Model: iPhone 15 Pro RAW", // Camera settings and additional details about the image.
    thumbnail: thumbnail1, // The thumbnail image for this blog.
  },
  
  {
    id: 2, // Unique ID for the second blog post
    type: "image", // This blog is an image type
    title: "Aesthetic Shot: Cozy and Carefree", // Title for the second blog
    content: `
      For the aesthetic shot, I wanted a relaxed, playful feel, showing a candid side. With the same f/1.8 aperture, paired with a 1/89 shutter speed and ISO 100, I captured a well-lit, airy image that feels welcoming. The natural light gently illuminated the scene, creating an inviting atmosphere that draws the viewer in. The settings allowed for a smooth balance between the soft brightness and the details in the image, making it feel open and approachable. I converted the image to black and white by opening it in GIMP, navigating to "Colors" in the menu, selecting "Desaturate," and choosing the optimal grayscale mode.
      
      <br /><br />
      
      This process allowed the textures to stand out, achieving a professional yet personal touch. The choice of black and white not only adds depth to the image but also removes distractions, allowing the viewer to focus on the textures and the subtle expressions. The natural light from the window added a soft, gentle glow, enhancing the relaxed vibe. The wider aperture created a dreamy background blur, placing focus on my expression without overly sharp details that might make it feel staged. It felt organic and genuine, as if the moment had unfolded naturally rather than being posed. The combination of these settings resulted in a feeling of ease, inviting the viewer into a space that feels comfortable and unforced.
      
      <br /><br />
      
      This photo radiates a cozy, carefree vibe, highlighting my personality in a spontaneous, lighthearted way. The relaxed tone of the image reflects a side of me that values authenticity and the joy of simple moments. It's an invitation to see a more genuine, fun side different from the formal headshot but equally reflective of who I am. By balancing casual energy with aesthetic appeal, the shot captures a harmonious blend of professionalism and playfulness, ideal for relaxed and creative contexts. 
      
     
    `, // Description of the second blog

    metadata: "Aperture of f/1.8 | ISO 100 | 1/89 shutter speed | Model: iPhone 15 Pro RAW", // Camera settings and additional details for this image
    thumbnail: thumbnail2, // The thumbnail image for the second blog
  },

  {
    id: 3, // Unique ID for the third blog post
    type: "image", // Another image-type blog
    title: "Passionate Moment: A Love for Design", // Title for the third blog
    content: `
      The final image captures my passion for design through an intimate moment with books. I selected a 1/171 shutter speed to preserve fine details while keeping the shot soft and personal. With an aperture of f/1.8 and a lower ISO of 64, the lighting remained gentle, balancing the warmth of the window light with the quiet focus of reading. This delicate balance in settings created a soft, natural atmosphere, adding depth to the scene while subtly emphasizing the emotion of the moment.
      
      <br /><br />
      
      The settings allowed the scene to stay crisp yet grounded, emphasizing my concentration and connection with the books. The image gained a bold, punchy feel, capturing the stunning natural light from the window. The careful choice of settings brought out the richness in the details, making the entire scene feel serene yet alive. Using GIMP, I converted it to black and white by navigating to "Colors" and selecting "Desaturate." This transformation not only enhanced the timeless quality of the image but also allowed the viewer to focus entirely on the subject without the distraction of color, further highlighting the mood of quiet reflection.
      
      <br /><br />
      
      This photo showcases my commitment to continuous learning and growth, highlighting a reflective side that is dedicated and curious. It represents my love for design, inviting the viewer to glimpse an important aspect of my identity. The quiet moment captured in this photo reminds me of how design fuels my creativity and passion. It's a personal reminder of how deeply I engage with my work and how design shapes my thoughts, allowing me to learn from each experience and apply it to the next. 
      
      <br /><br />
      
      It's not just a career, design is an integral part of who I am, both personally and professionally. It defines the way I see the world and influences the choices I make every day. The balance between thoughtfulness and creativity is what makes this image meaningful. 
    `, // Description of the third blog post

    metadata: "Aperture of f/1.8 | ISO 64 | 1/171 shutter speed | Model: iPhone 15 Pro RAW", // Metadata for the third image
    thumbnail: thumbnail3, // The thumbnail image for this blog
  },
  {
    id: 4, // Unique ID for the fourth blog post
    type: "video", // This one is a video blog
    title: "Behind the Lens: Directing the DailyBasics Pasta Ad 🍝", // Title for the video blog
    content: `
      <p>As the director of the <em>DailyBasics Pasta</em> ad for <em>SuperValue Store</em>, my responsibility was to bring the brand's vision to life while ensuring every element of the shoot reflected the product's charm.</p>
      <p>My contributions included:</p>
      <ul>
        <li><strong>Conceptualizing the Narrative:</strong> Developed a storyline that celebrated the simplicity and comfort of pasta, ensuring the ad resonated with the audience.</li>
        <li><strong>Framing the Shots:</strong> Collaborated with the cinematographer to plan angles and compositions that highlighted the product while maintaining a warm and inviting tone.</li>
        <li><strong>Guiding the Team:</strong> Coordinated with the lighting, sound, and continuity teams to ensure their work aligned with the creative vision, ensuring consistency and quality across every scene.</li>
        <li><strong>Directing Performances:</strong> Guided the team on capturing authentic and engaging moments, from food preparation to subtle actions, to make the visuals appealing.</li>
        <li><strong>Overseeing Post-Production Needs:</strong> Ensured all necessary footage was captured for a seamless edit and provided input during the review process to keep the final cut true to the vision.</li>
      </ul>
      <p>Directing this project was an exciting challenge that allowed our team to translate an idea into a visually engaging ad. It was a collaborative and rewarding experience to see how our combined efforts and creative synergy helped shape the story, making DailyBasics Pasta a brand that feels as warm and inviting as the meals it creates. The project wasn’t without its challenges, but these moments pushed us to innovate and adapt as a group.</p>
      
      <p>Shooting with natural light required us to carefully time our shots, while the LED panel and ring light were collectively used to balance lighting inconsistencies. Every detail, from the steam rising off the pasta to the sound of boiling water, was thoughtfully planned and executed by the team to create an ad that felt vibrant and alive. This project truly showcased the power of teamwork, creativity, and problem-solving, making the final outcome a proud achievement for all of us.</p>
      
      <p> The shoot was conducted using two phones, the iPhone 15 Pro and iPhone 15  which provided exceptional video quality, vibrant colours, and a cinematic depth of field. These tools proved to be effective in creating a professional-grade ad while maintaining flexibility during the shoot. Directing this project was an exciting and rewarding journey. From conceptualisation to execution, it allowed us to translate a simple idea into a visually engaging ad.
      </p>
      
    `, // Content for the video blog with some HTML
    metadata: "Click the thumbnail to watch the video!", // Metadata explaining the video
    thumbnail: thumbnailImage, // Thumbnail image for the video blog
    videoUrl: "https://youtu.be/f4ZAMhef5HI?si=yNEdcPpw5DBcTfIi", // YouTube video URL for the blog
    additionalImages: [bts, bts2, bts3], // Additional behind-the-scenes images for the video blog
  },
];

const Blog: React.FC = () => {
  const blogsFromState = useSelector((state: RootState) => state.blog.blogs); // I get the list of blogs from the Redux state.
  const dispatch = useDispatch<AppDispatch>();  // I use the dispatch function to send actions to Redux.
  const [newComment, setNewComment] = useState<{ [key: number]: string }>({}); // I keep track of new comment input for each blog post.

  // Function to handle adding a new comment to a blog post
  const handleAddComment = (id: number) => {
    if (newComment[id]?.trim()) { // Check if the comment is not empty
      dispatch(addComment({ id, comment: newComment[id] })); // Dispatch the action to add the comment to Redux state
      setNewComment({ ...newComment, [id]: "" }); // Reset the input field after submission
    }
  };

  return (
    <div className="blog-background"> {/* Main container for the entire blog section */}
    {/* Loop through each blog post and display its content */}
      {blogs.map((blog, index) => (
        <div key={blog.id} className="blog-container">
          {/* Vertical Media Section */}
          <div className="vertical-content">
            {/* Main Thumbnail */}
            {blog.type !== "video" && (
              <img
                src={blog.thumbnail}
                alt={`Thumbnail for Blog ${blog.title}`}
                className="vertical-thumbnail"
              />
            )}

            {/* Video Thumbnail */}
            {blog.videoUrl && blog.type === "video" && (
              <div
                className="video-thumbnail"
                onClick={() => window.open(blog.videoUrl, "_blank")}
              >
                <img
                  src={blog.thumbnail}
                  alt="Video Thumbnail"
                  className="thumbnail-image"
                />
                <img src={playButtonIcon} alt="Play Button" className="play-button" />
              </div>
            )}

            {/* Additional Images */}
            {blog.additionalImages &&
              blog.additionalImages.map((image, idx) => (
                <img
                  key={idx}
                  src={image}
                  alt={`Additional Image ${idx + 1}`}
                  className="vertical-thumbnail"
                />
              ))}
          </div>

          {/* Text Section */}
          <div className="text-section">
            <h2 className="blog-heading">{blog.title}</h2>
            <div
              className="blog-content"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            ></div>
            <div className="blog1">{blog.metadata}</div>
            <div className="blog-actions">
              <button onClick={() => dispatch(incrementLikes(blog.id))}>
                Like ({blogsFromState[index]?.likes || 0})
              </button>
              <div className="emoji-section">
                {Object.keys(blogsFromState[index]?.emojis || {}).map((emoji) => (
                  <button
                    key={emoji}
                    onClick={() => dispatch(addEmoji({ id: blog.id, emoji }))}
                  >
                    {emoji} ({blogsFromState[index]?.emojis[emoji] || 0})
                  </button>
                ))}
              </div>
            </div>
            <div className="comment-section">
              <h4>Comments:</h4>
              <ul>
                {blogsFromState[index]?.commentList?.map((comment, idx) => (
                  <li key={idx}>{comment}</li>
                ))}
              </ul>
              <input
                type="text"
                placeholder="Write a comment..."
                value={newComment[blog.id] || ""}
                onChange={(e) =>
                  setNewComment({ ...newComment, [blog.id]: e.target.value })
                }
              />
              <button onClick={() => handleAddComment(blog.id)}>Add Comment</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blog;
