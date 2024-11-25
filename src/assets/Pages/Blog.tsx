import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../Redux/store"; // Ensure correct path to store
import { incrementLikes, addComment, addEmoji } from "../../Redux/blogSlice";
import thumbnail1 from "../Images/tumbnail1.jpg";
import thumbnail2 from "../Images/thumbnail2.jpg";
import thumbnail3 from "../Images/thumbnail3.jpg";
import playButtonIcon from "../Images/youtube.png";
import thumbnailImage from "../Images/1background.jpg";
import bts from "../Images/bts.jpg";
import bts2 from "../Images/bts2.jpg";
import bts3 from "../Images/bts3.jpg";
import "./Blog.css";

const blogs = [
  {
    id: 1,
    type: "text",
    title: "Professional Headshot: A Polished Look",
    content: `
      In my headshot, I aimed to create a straightforward and approachable image, capturing a confident, professional side. With an aperture of f/1.8, I achieved a soft background blur, keeping the focus entirely on my face. Using GIMP, I kept the editing minimal, focusing on contrast adjustments to bring out texture details and adding a slight brightness increase for a refined effect.
      
      I also converted the original color image to black and white, achieving a clean, natural look with a subtle polish. The ISO 250 setting balanced the natural light streaming from the bedroom window, creating a warm, natural glow without washing out the details. The 1/60 shutter speed preserved the sharpness, capturing a moment that feels both poised and natural. Wearing black helped simplify the image, making it visually clean and timeless.
      
      The choice of a direct gaze and gentle smile completes the professional aesthetic, projecting confidence and approachability. This photo reflects authenticity and warmth. Overall, this headshot tells a story about who I am—a balance between confidence, relatability, and simplicity, ideal for professional settings. A polished look that is approachable and timeless was the ultimate goal.
    `,
    metadata: "Aperture of f/1.8 | ISO 250 | 1/60 shutter speed | Model: iPhone 15 Pro RAW",
    thumbnail: thumbnail1,
  },
  {
    id: 2,
    type: "image",
    title: "Aesthetic Shot: Cozy and Carefree",
    content: `
      For the aesthetic shot, I wanted a relaxed, playful feel, showing a candid side. With the same f/1.8 aperture, paired with a 1/89 shutter speed and ISO 100, I captured a well-lit, airy image that feels welcoming. I converted the image to black and white by opening it in GIMP, navigating to "Colors" in the menu, selecting "Desaturate," and choosing the optimal grayscale mode.
      
      This process allowed the textures to stand out, achieving a professional yet personal touch. The natural light from the window added a soft, gentle glow, enhancing the relaxed vibe. The wider aperture created a dreamy background blur, placing focus on my expression without overly sharp details that might make it feel staged. It felt organic and genuine.
      
      This photo radiates a cozy, carefree vibe, highlighting my personality in a spontaneous, lighthearted way. It's an invitation to see a more genuine, fun side different from the formal headshot but equally reflective of who I am. By balancing casual energy with aesthetic appeal, the shot captures a harmonious blend of professionalism and playfulness, ideal for relaxed and creative contexts.
    `,
    metadata: "Aperture of f/1.8 | ISO 100 | 1/89 shutter speed | Model: iPhone 15 Pro RAW",
    thumbnail: thumbnail2,
  },
  {
    id: 3,
    type: "image",
    title: "Passionate Moment: A Love for Design",
    content: `
      The final image captures my passion for design through an intimate moment with books. I selected a 1/171 shutter speed to preserve fine details while keeping the shot soft and personal. With an aperture of f/1.8 and a lower ISO of 64, the lighting remained gentle, balancing the warmth of the window light with the quiet focus of reading.
      
      The settings allowed the scene to stay crisp yet grounded, emphasizing my concentration and connection with the books. The image gained a bold, punchy feel, capturing the stunning natural light from the window. Using GIMP, I converted it to black and white by navigating to "Colors" and selecting "Desaturate."
      
      This photo showcases my commitment to continuous learning and growth, highlighting a reflective side that is dedicated and curious. It represents my love for design, inviting the viewer to glimpse an important aspect of my identity. The quiet moment captured in this photo reminds me of how design fuels my creativity and passion.
      
      It's not just a career design is an integral part of who I am, both personally and professionally. The balance between thoughtfulness and creativity is what makes this image meaningful.
    `,
    metadata: "Aperture of f/1.8 | ISO 64 | 1/171 shutter speed | Model: iPhone 15 Pro RAW",
    thumbnail: thumbnail3,
  },
  {
    id: 4,
    type: "video",
    title: "Behind the Lens: Directing the DailyBasics Pasta Ad 🍝",
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
      
    `,
    metadata: "Click the thumbnail to watch the video!",
    thumbnail: thumbnailImage,
    videoUrl: "https://youtu.be/f4ZAMhef5HI?si=yNEdcPpw5DBcTfIi",
    additionalImages: [bts, bts2, bts3], // Include additional images here
  },
];

const Blog: React.FC = () => {
  const blogsFromState = useSelector((state: RootState) => state.blog.blogs);
  const dispatch = useDispatch<AppDispatch>();
  const [newComment, setNewComment] = useState<{ [key: number]: string }>({});

  const handleAddComment = (id: number) => {
    if (newComment[id]?.trim()) {
      dispatch(addComment({ id, comment: newComment[id] }));
      setNewComment({ ...newComment, [id]: "" });
    }
  };

  return (
    <div className="blog-background">
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
